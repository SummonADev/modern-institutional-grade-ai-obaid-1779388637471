import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';

export interface UseAuthReturn {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const STORAGE_KEY = 'alphaedge_user';

function loadProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProfile(profile: UserProfile | null) {
  if (profile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function useAuth(): UseAuthReturn {
  const [profile, setProfile] = useState<UserProfile | null>(loadProfile);

  const isAuthenticated = profile !== null;

  const login = useCallback(async (email: string, _password: string): Promise<{ error?: string }> => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
    };
    saveProfile(newProfile);
    setProfile(newProfile);
    return {};
  }, []);

  const signup = useCallback(async (name: string, email: string, _password: string): Promise<{ error?: string }> => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name,
      email,
    };
    saveProfile(newProfile);
    setProfile(newProfile);
    return {};
  }, []);

  const logout = useCallback(() => {
    saveProfile(null);
    setProfile(null);
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      saveProfile(updated);
      return updated;
    });
  }, []);

  return { profile, isAuthenticated, login, signup, logout, updateProfile };
}
