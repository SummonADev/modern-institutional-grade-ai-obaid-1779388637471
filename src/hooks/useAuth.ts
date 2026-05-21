import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { UserProfile } from '@/types/index';

export type UseAuthReturn = {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
};

const DEFAULT_PROFILE: UserProfile = {
  id: '1',
  name: 'Alex Trader',
  email: 'alex@alphaedge.io',
  plan: 'pro',
  tradingStyle: 'swing',
  experience: 'intermediate',
  riskTolerance: 'moderate',
};

export function useAuth(): UseAuthReturn {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('auth_profile', DEFAULT_PROFILE);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(profile !== null);

  const login = useCallback(async (email: string, _password: string) => {
    const newProfile: UserProfile = {
      ...DEFAULT_PROFILE,
      email,
    };
    setProfile(newProfile);
    setIsAuthenticated(true);
  }, [setProfile]);

  const logout = useCallback(() => {
    setProfile(null);
    setIsAuthenticated(false);
  }, [setProfile]);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => prev ? { ...prev, ...updates } : prev);
  }, [setProfile]);

  return { profile, isAuthenticated, login, logout, updateProfile };
}
