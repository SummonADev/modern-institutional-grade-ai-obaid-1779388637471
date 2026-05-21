import { useState, useEffect, useContext, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  updateProfile: (updates: Partial<UserProfile>) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const defaultProfile: UserProfile = {
  name: 'Alex Trader',
  email: 'alex@alphaedge.io',
};

export function useAuth(): AuthState {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('auth_profile', defaultProfile);
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('auth_isAuthenticated', true);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => prev ? { ...prev, ...updates } : prev);
  };

  const login = async (email: string, _password: string): Promise<void> => {
    setProfile({ name: email.split('@')[0] || 'Trader', email });
    setIsAuthenticated(true);
  };

  const signup = async (name: string, email: string, _password: string): Promise<void> => {
    setProfile({ name, email });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setProfile(null);
  };

  return {
    profile,
    isAuthenticated,
    updateProfile,
    login,
    signup,
    logout,
  };
}
