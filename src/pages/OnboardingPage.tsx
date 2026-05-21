import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tradingStyle, setTradingStyle] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ tradingStyle, experience });
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 480, margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>Welcome! Tell us about yourself</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: 6, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
            Trading Style
          </label>
          <select
            value={tradingStyle}
            onChange={e => setTradingStyle(e.target.value)}
            style={{ width: '100%', padding: '8px 12px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-primary)' }}
          >
            <option value="">Select...</option>
            <option value="Day Trading">Day Trading</option>
            <option value="Swing Trading">Swing Trading</option>
            <option value="Long-Term Investing">Long-Term Investing</option>
          </select>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: 6, color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
            Experience Level
          </label>
          <select
            value={experience}
            onChange={e => setExperience(e.target.value)}
            style={{ width: '100%', padding: '8px 12px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-primary)' }}
          >
            <option value="">Select...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', background: 'var(--color-accent-blue)', border: 'none', borderRadius: 'var(--radius-md)', color: 'white', fontWeight: 600, cursor: 'pointer' }}
        >
          Get Started
        </button>
      </form>
    </div>
  );
}
