import type { UserProfile } from '@/types';

const STORAGE_KEYS = {
  USER_PROFILE: 'alphaedge_user_profile',
  AUTH_SESSION: 'alphaedge_session',
} as const;

const DEFAULT_PROFILE: UserProfile = {
  name: '',
  email: '',
  investingStyle: 'both',
  riskTolerance: 'moderate',
  accountSize: '',
  experience: '',
  sectors: [],
  onboardingComplete: false,
  shariahMode: false,
  apiKeys: {
    polygon: '',
    fmp: '',
    benzinga: '',
    alpaca: '',
    alpacaSecret: '',
    openai: '',
    anthropic: '',
  },
};

export function getProfile(): UserProfile {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (stored) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(stored) };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_PROFILE };
}

export function saveProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch {
    // ignore
  }
}

export function getSession(): { email: string; loggedIn: boolean } | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.AUTH_SESSION);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

export function saveSession(email: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_SESSION, JSON.stringify({ email, loggedIn: true }));
  } catch {
    // ignore
  }
}

export function clearSession(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_SESSION);
  } catch {
    // ignore
  }
}
