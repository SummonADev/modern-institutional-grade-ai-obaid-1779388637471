import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/types';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tradingStyle, setTradingStyle] = useState<UserProfile['tradingStyle']>('swing');
  const [experience, setExperience] = useState<UserProfile['experience']>('intermediate');

  const handleSubmit = () => {
    updateProfile({ tradingStyle, experience });
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 480, margin: '0 auto' }}>
      <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>Welcome! Let's set up your profile</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 8 }}>Trading Style</label>
        <select
          value={tradingStyle}
          onChange={e => setTradingStyle(e.target.value as UserProfile['tradingStyle'])}
          style={{ width: '100%', padding: '8px 12px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 6, color: 'var(--color-text-primary)' }}
        >
          <option value="day-trading">Day Trading</option>
          <option value="swing">Swing Trading</option>
          <option value="long-term">Long-Term</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 8 }}>Experience Level</label>
        <select
          value={experience}
          onChange={e => setExperience(e.target.value as UserProfile['experience'])}
          style={{ width: '100%', padding: '8px 12px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 6, color: 'var(--color-text-primary)' }}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        style={{ width: '100%', padding: '10px', background: 'var(--color-accent-blue)', border: 'none', borderRadius: 6, color: 'white', fontWeight: 600, cursor: 'pointer' }}
      >
        Get Started
      </button>
    </div>
  );
}
