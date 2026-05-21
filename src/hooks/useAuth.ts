import { useState, useEffect, useCallback } from 'react';
import { getSession, saveSession, clearSession, getProfile, saveProfile } from '@/lib/storage';
import type { UserProfile } from '@/types';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const session = getSession();
    if (session?.loggedIn) {
      setIsLoggedIn(true);
      setProfile(getProfile());
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((email: string, _password: string): boolean => {
    // Mock auth — accept any credentials
    saveSession(email);
    const p = getProfile();
    p.email = email;
    if (!p.name) p.name = email.split('@')[0];
    saveProfile(p);
    setProfile(p);
    setIsLoggedIn(true);
    return true;
  }, []);

  const signup = useCallback((name: string, email: string, _password: string): boolean => {
    saveSession(email);
    const p = getProfile();
    p.name = name;
    p.email = email;
    p.onboardingComplete = false;
    saveProfile(p);
    setProfile(p);
    setIsLoggedIn(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setIsLoggedIn(false);
    setProfile(null);
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    const current = getProfile();
    const updated = { ...current, ...updates };
    saveProfile(updated);
    setProfile(updated);
  }, []);

  return { isLoggedIn, isLoading, profile, login, signup, logout, updateProfile };
}
