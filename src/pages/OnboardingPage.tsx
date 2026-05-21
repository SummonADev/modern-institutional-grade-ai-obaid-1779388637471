import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tradingStyle, setTradingStyle] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = () => {
    updateProfile({ onboardingComplete: true, tradingStyle, experience });
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-primary)' }}>
      <div style={{ width: '100%', maxWidth: 480, padding: '2rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '1.5rem', fontSize: 'var(--text-xl)', fontWeight: 700 }}>Welcome! Let's set up your profile</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: '0.5rem' }}>Trading Style</label>
          <select
            value={tradingStyle}
            onChange={e => setTradingStyle(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-primary)' }}
          >
            <option value="">Select...</option>
            <option value="day-trader">Day Trader</option>
            <option value="swing-trader">Swing Trader</option>
            <option value="investor">Long-Term Investor</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: '0.5rem' }}>Experience Level</label>
          <select
            value={experience}
            onChange={e => setExperience(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-primary)' }}
          >
            <option value="">Select...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          style={{ width: '100%', padding: '0.75rem', background: 'var(--color-accent-blue)', border: 'none', borderRadius: 'var(--radius-md)', color: 'white', fontWeight: 600, cursor: 'pointer' }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
