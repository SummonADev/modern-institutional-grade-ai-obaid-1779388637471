import { useState, useEffect } from 'react';
import { getStoredUser, storeUser, clearUser, StoredUser } from '@/lib/storage';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: UserProfile | null;
  profile: UserProfile | null;
  loading: boolean;
};

type AuthHook = AuthState & {
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

export function useAuth(): AuthHook {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
  });

  useEffect(() => {
    const stored = getStoredUser();
    if (stored) {
      const profile: UserProfile = { id: stored.id, name: stored.name, email: stored.email };
      setState({ user: profile, profile, loading: false });
    } else {
      setState(s => ({ ...s, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const stored = getStoredUser();
    if (stored && stored.email === email) {
      const profile: UserProfile = { id: stored.id, name: stored.name, email: stored.email };
      setState({ user: profile, profile, loading: false });
      return;
    }
    // Demo: accept any credentials and create a session
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
    };
    const toStore: StoredUser = { ...profile };
    storeUser(toStore);
    setState({ user: profile, profile, loading: false });
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name,
      email,
    };
    const toStore: StoredUser = { ...profile };
    storeUser(toStore);
    setState({ user: profile, profile, loading: false });
  };

  const logout = () => {
    clearUser();
    setState({ user: null, profile: null, loading: false });
  };

  return { ...state, login, signup, logout };
}
