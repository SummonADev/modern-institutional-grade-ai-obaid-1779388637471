import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';

const PROFILE_KEY = 'alphaedge_profile';

function loadProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProfile(profile: UserProfile | null) {
  if (profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } else {
    localStorage.removeItem(PROFILE_KEY);
  }
}

export function useAuth() {
  const [profile, setProfile] = useState<UserProfile | null>(loadProfile);

  const login = useCallback((email: string, _password: string): { error?: string } => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
    };
    setProfile(newProfile);
    saveProfile(newProfile);
    return {};
  }, []);

  const signup = useCallback((email: string, _password: string): { error?: string } => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
    };
    setProfile(newProfile);
    saveProfile(newProfile);
    return {};
  }, []);

  const logout = useCallback(() => {
    setProfile(null);
    saveProfile(null);
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
