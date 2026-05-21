import { useState, useEffect } from 'react';
import { UserProfile } from '@/types';

export interface AuthHook {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const DEFAULT_PROFILE: UserProfile = {
  id: '1',
  name: 'Alex Trader',
  email: 'alex@alphaedge.io',
  riskTolerance: 'moderate',
  tradingStyle: 'mixed',
  experience: 'intermediate',
  preferredSectors: ['Technology', 'Healthcare', 'Finance'],
};

export function useAuth(): AuthHook {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('user_profile');
      if (stored) {
        setProfile(JSON.parse(stored));
      } else {
        setProfile(DEFAULT_PROFILE);
        localStorage.setItem('user_profile', JSON.stringify(DEFAULT_PROFILE));
      }
    } catch {
      setProfile(DEFAULT_PROFILE);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user_profile');
    setProfile(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem('user_profile', JSON.stringify(updated));
      return updated;
    });
  };

  return {
    profile,
    isAuthenticated: !!profile,
    isLoading,
    logout,
    updateProfile,
  };
}
