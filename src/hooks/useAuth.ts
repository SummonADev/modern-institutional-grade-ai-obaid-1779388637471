import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';
import { getStoredProfile, setStoredProfile } from '@/lib/storage';

const DEFAULT_PROFILE: UserProfile = {
  id: 'user-1',
  name: 'Alex Trader',
  email: 'alex@alphaedge.io',
  preferredSectors: ['Technology', 'Healthcare', 'Finance'],
  riskTolerance: 'moderate',
  tradingStyle: 'day-trader',
};

export function useAuth() {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    return getStoredProfile() || DEFAULT_PROFILE;
  });

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      setStoredProfile(updated);
      return updated;
    });
  }, []);

  const logout = useCallback(() => {
    setProfile(null);
  }, []);

  return { profile, updateProfile, logout };
}
