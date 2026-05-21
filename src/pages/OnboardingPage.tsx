import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/types';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const [tradingStyle, setTradingStyle] = useState<UserProfile['tradingStyle']>('swing-trader');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  const handleSubmit = () => {
    updateProfile({ tradingStyle });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Onboarding</h1>
      <div>
        <label>Trading Style</label>
        <select
          value={tradingStyle}
          onChange={e => setTradingStyle(e.target.value as UserProfile['tradingStyle'])}
        >
          <option value="day-trader">Day Trader</option>
          <option value="swing-trader">Swing Trader</option>
          <option value="investor">Investor</option>
        </select>
      </div>
      <div>
        <label>Experience Level</label>
        <select
          value={experienceLevel}
          onChange={e => setExperienceLevel(e.target.value as 'beginner' | 'intermediate' | 'advanced')}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Get Started</button>
    </div>
  );
}
