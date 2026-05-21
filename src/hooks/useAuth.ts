import { useState } from 'react';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

const DEFAULT_USER: UserProfile = {
  id: 'default-user',
  name: 'Trader',
  email: 'trader@platform.com',
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
  const [state] = useState<AuthState>({
    user: DEFAULT_USER,
    profile: DEFAULT_USER,
    loading: false,
  });

  const login = async (_email: string, _password: string): Promise<void> => {};
  const signup = async (_name: string, _email: string, _password: string): Promise<void> => {};
  const logout = () => {};

  return { ...state, login, signup, logout };
}