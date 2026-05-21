import { UserProfile, AppSettings } from '@/types';

const KEYS = {
  USER_PROFILE: 'alphaedge_user_profile',
  APP_SETTINGS: 'alphaedge_app_settings',
  WATCHLIST: 'alphaedge_watchlist',
};

export function getStoredProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(KEYS.USER_PROFILE);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredProfile(profile: UserProfile): void {
  localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
}

export function getStoredSettings(): AppSettings | null {
  try {
    const raw = localStorage.getItem(KEYS.APP_SETTINGS);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredSettings(settings: AppSettings): void {
  localStorage.setItem(KEYS.APP_SETTINGS, JSON.stringify(settings));
}

export function getStoredWatchlist(): string[] {
  try {
    const raw = localStorage.getItem(KEYS.WATCHLIST);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setStoredWatchlist(symbols: string[]): void {
  localStorage.setItem(KEYS.WATCHLIST, JSON.stringify(symbols));
}
