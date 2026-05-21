import { useState, useCallback } from 'react';
import { UserProfile } from '@/types';
import { loadProfile, saveProfile, clearProfile } from '@/lib/storage';

interface AuthState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

const DEFAULT_PROFILE: UserProfile = {
  id: 'default-user',
  name: 'Demo Trader',
  email: 'demo@alphaedge.app',
  plan: 'pro',
  riskTolerance: 'medium',
  joinedAt: new Date().toISOString(),
  tradingStyle: 'Swing Trading',
  experience: 'Intermediate',
};

export function useAuth() {
  const [state, setState] = useState<AuthState>(() => {
    const stored = loadProfile();
    if (stored) {
      return { profile: stored, isAuthenticated: true };
    }
    // Auto-login with default profile for demo
    saveProfile(DEFAULT_PROFILE);
    return { profile: DEFAULT_PROFILE, isAuthenticated: true };
  });

  const login = useCallback((email: string, _password: string) => {
    const newProfile: UserProfile = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      plan: 'free',
      riskTolerance: 'medium',
      joinedAt: new Date().toISOString(),
    };
    saveProfile(newProfile);
    setState({ profile: newProfile, isAuthenticated: true });
  }, []);

  const signup = useCallback((name: string, email: string, _password: string) => {
    const newProfile: UserProfile = {
      id: crypto.randomUUID(),
      name,
      email,
      plan: 'free',
      riskTolerance: 'medium',
      joinedAt: new Date().toISOString(),
    };
    saveProfile(newProfile);
    setState({ profile: newProfile, isAuthenticated: true });
  }, []);

  const logout = useCallback(() => {
    clearProfile();
    setState({ profile: null, isAuthenticated: false });
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setState((prev) => {
      if (!prev.profile) return prev;
      const updated = { ...prev.profile, ...updates };
      saveProfile(updated);
      return { ...prev, profile: updated };
    });
  }, []);

  return {
    profile: state.profile,
    isAuthenticated: state.isAuthenticated,
    login,
    signup,
    logout,
    updateProfile,
  };
}
