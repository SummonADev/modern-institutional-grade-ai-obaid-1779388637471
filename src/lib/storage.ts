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
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // ignore
  }
}

export function clearProfile(): void {
  localStorage.removeItem(PROFILE_KEY);
}

export function loadSettings(): AppSettings | null {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? (JSON.parse(raw) as AppSettings) : null;
  } catch {
    return null;
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}
