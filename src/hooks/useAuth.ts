import { useLocalStorage } from './useLocalStorage';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  onboardingComplete: boolean;
  tradingStyle?: string;
  experience?: string;
};

const DEFAULT_PROFILE: UserProfile = {
  id: 'default-user',
  name: 'Trader',
  email: 'trader@alphaedge.app',
  onboardingComplete: true,
};

type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
};

export function useAuth(): AuthState {
  const [profile, setProfile] = useLocalStorage<UserProfile>('auth_profile', DEFAULT_PROFILE);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile({ ...profile, ...updates });
  };

  return {
    isLoggedIn: true,
    isLoading: false,
    profile,
    updateProfile,
  };
}
