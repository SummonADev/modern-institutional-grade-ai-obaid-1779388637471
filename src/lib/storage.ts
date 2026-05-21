import { UserProfile, AppSettings } from '@/types';

const PROFILE_KEY = 'alphaedge_profile';
const SETTINGS_KEY = 'alphaedge_settings';

export function loadProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? (JSON.parse(raw) as UserProfile) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: UserProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function clearProfile(): void {
  localStorage.removeItem(PROFILE_KEY);
}

export function loadSettings(): AppSettings {
  const defaults: AppSettings = {
    theme: 'dark',
    notifications: true,
    riskLevel: 'moderate',
  };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaults, ...(JSON.parse(raw) as Partial<AppSettings>) } : defaults;
  } catch {
    return defaults;
  }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
