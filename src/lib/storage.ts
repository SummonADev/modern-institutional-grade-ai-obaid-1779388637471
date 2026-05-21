import { UserProfile, AppSettings } from '@/types';

const PROFILE_KEY = 'alphaedge_profile';
const SETTINGS_KEY = 'alphaedge_settings';

const DEFAULT_PROFILE: UserProfile = {
  id: '1',
  name: 'Alex Trader',
  email: 'alex@alphaedge.io',
  plan: 'pro',
  riskTolerance: 'moderate',
  preferredAssets: ['stocks', 'options'],
  onboardingComplete: true,
};

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'dark',
  notifications: true,
  soundAlerts: false,
  defaultView: 'dashboard',
  currency: 'USD',
};

export function getProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: UserProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function clearStorage(): void {
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(SETTINGS_KEY);
}
