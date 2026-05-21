import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';
import { loadProfile, saveProfile, clearProfile } from '@/lib/storage';

export function useAuth() {
  const [profile, setProfile] = useState<UserProfile | null>(() => loadProfile());

  const login = useCallback((email: string, _password: string) => {
    const existing = loadProfile();
    if (existing && existing.email === email) {
      setProfile(existing);
      return;
    }
    const newProfile: UserProfile = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      plan: 'free',
      riskTolerance: 'moderate',
      preferredAssets: ['stocks'],
      onboardingComplete: false,
    };
    saveProfile(newProfile);
    setProfile(newProfile);
  }, []);

  const signup = useCallback((name: string, email: string, _password: string) => {
    const newProfile: UserProfile = {
      id: crypto.randomUUID(),
      name,
      email,
      plan: 'free',
      riskTolerance: 'moderate',
      preferredAssets: ['stocks'],
      onboardingComplete: false,
    };
    saveProfile(newProfile);
    setProfile(newProfile);
  }, []);

  const logout = useCallback(() => {
    clearProfile();
    setProfile(null);
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile(prev => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      saveProfile(updated);
      return updated;
    });
  }, []);

  return { profile, login, signup, logout, updateProfile };
}
