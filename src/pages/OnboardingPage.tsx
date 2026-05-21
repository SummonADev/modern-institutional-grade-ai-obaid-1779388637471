import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { AuthLayout } from '@/components/auth/AuthLayout';
import styles from './AuthPages.module.css';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tradingStyle, setTradingStyle] = useState('swing');
  const [experience, setExperience] = useState('intermediate');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateProfile({ tradingStyle, experience });
    navigate('/');
  }

  return (
    <AuthLayout>
      <div className={styles.card}>
        <h1 className={styles.title}>Set up your profile</h1>
        <p className={styles.subtitle}>Help us personalize your trading experience</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Trading Style</label>
            <select
              value={tradingStyle}
              onChange={e => setTradingStyle(e.target.value)}
              className={styles.input}
            >
              <option value="scalping">Scalping</option>
              <option value="day">Day Trading</option>
              <option value="swing">Swing Trading</option>
              <option value="position">Position Trading</option>
              <option value="investing">Long-term Investing</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Experience Level</label>
            <select
              value={experience}
              onChange={e => setExperience(e.target.value)}
              className={styles.input}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          <button type="submit" className={styles.btn}>
            Get Started
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
