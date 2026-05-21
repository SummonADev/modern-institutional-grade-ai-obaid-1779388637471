import { UserProfile, AppSettings } from '@/types';

const KEYS = {
  PROFILE: 'user_profile',
  SETTINGS: 'app_settings',
  WATCHLIST: 'watchlist',
  ONBOARDING: 'onboarding_complete',
};

export const storage = {
  getProfile(): UserProfile | null {
    try {
      const raw = localStorage.getItem(KEYS.PROFILE);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  setProfile(profile: UserProfile): void {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  },

  getSettings(): AppSettings | null {
    try {
      const raw = localStorage.getItem(KEYS.SETTINGS);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  setSettings(settings: AppSettings): void {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  },

  isOnboardingComplete(): boolean {
    return localStorage.getItem(KEYS.ONBOARDING) === 'true';
  },

  setOnboardingComplete(): void {
    localStorage.setItem(KEYS.ONBOARDING, 'true');
  },

  clear(): void {
    Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
  },
};
