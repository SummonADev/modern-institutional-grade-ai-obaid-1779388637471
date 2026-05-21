import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  onboardingComplete: boolean;
  tradingStyle?: string;
  experience?: string;
};

type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile: UserProfile | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
};

export function useAuth(): AuthState {
  const [storedProfile, setStoredProfile] = useLocalStorage<UserProfile | null>('auth_profile', null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, _password: string): Promise<{ error?: string }> => {
    if (!email) return { error: 'Email is required' };
    if (storedProfile && storedProfile.email === email) {
      return {};
    }
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      onboardingComplete: false,
    };
    setStoredProfile(profile);
    return {};
  };

  const signup = async (name: string, email: string, _password: string): Promise<{ error?: string }> => {
    if (!name || !email) return { error: 'All fields are required' };
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name,
      email,
      onboardingComplete: false,
    };
    setStoredProfile(profile);
    return {};
  };

  const logout = () => {
    setStoredProfile(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (storedProfile) {
      setStoredProfile({ ...storedProfile, ...updates });
    }
  };

  return {
    isLoggedIn: !!storedProfile,
    isLoading,
    profile: storedProfile,
    login,
    signup,
    logout,
    updateProfile,
  };
}
