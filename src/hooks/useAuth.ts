import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';
import { loadProfile, saveProfile } from '@/lib/storage';

export type AuthHook = {
  profile: UserProfile | null;
  updateProfile: (updates: Partial<UserProfile>) => void;
  logout: () => void;
};

export function useAuth(): AuthHook {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = loadProfile();
    if (saved) return saved;
    return {
      id: 'local-user',
      name: 'Trader',
      email: 'trader@alphaedge.com',
      plan: 'free',
      tradingStyle: 'swing',
      experience: 'intermediate',
      riskTolerance: 'medium',
    };
  });

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...updates };
      saveProfile(next);
      return next;
    });
  }, []);

  const logout = useCallback(() => {
    // client-side only — just reset to default
    const defaultProfile: UserProfile = {
      id: 'local-user',
      name: 'Trader',
      email: 'trader@alphaedge.com',
      plan: 'free',
      tradingStyle: 'swing',
      experience: 'intermediate',
      riskTolerance: 'medium',
    };
    setProfile(defaultProfile);
    saveProfile(defaultProfile);
  }, []);

  return { profile, updateProfile, logout };
}
