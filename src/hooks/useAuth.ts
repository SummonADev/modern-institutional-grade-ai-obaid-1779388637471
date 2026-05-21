import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';
import { loadProfile, saveProfile, clearProfile } from '@/lib/storage';

type AuthResult = { error: string | null };

interface UseAuthReturn {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => AuthResult;
  signup: (name: string, email: string, password: string) => AuthResult;
  logout: () => void;
}

export function useAuth(): UseAuthReturn {
  const [profile, setProfile] = useState<UserProfile | null>(() => loadProfile());

  const login = useCallback((email: string, _password: string): AuthResult => {
    // Mock login — accept any credentials
    const existing = loadProfile();
    if (existing && existing.email === email) {
      setProfile(existing);
      return { error: null };
    }
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
      createdAt: new Date().toISOString(),
    };
    saveProfile(newProfile);
    setProfile(newProfile);
    return { error: null };
  }, []);

  const signup = useCallback((name: string, email: string, _password: string): AuthResult => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };
    saveProfile(newProfile);
    setProfile(newProfile);
    return { error: null };
  }, []);

  const logout = useCallback(() => {
    clearProfile();
    setProfile(null);
  }, []);

  return {
    profile,
    isAuthenticated: profile !== null,
    login,
    signup,
    logout,
  };
}
