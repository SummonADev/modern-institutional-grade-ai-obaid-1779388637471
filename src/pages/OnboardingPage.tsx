import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import styles from './AuthPages.module.css';

export function OnboardingPage() {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tradingStyle, setTradingStyle] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ onboardingComplete: true, tradingStyle, experience });
    navigate('/');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tell us about yourself</h1>
        <p className={styles.subtitle}>Help us personalize your experience</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Trading Style</label>
          <select
            value={tradingStyle}
            onChange={e => setTradingStyle(e.target.value)}
            className={styles.input}
            required
          >
            <option value="">Select style...</option>
            <option value="day">Day Trading</option>
            <option value="swing">Swing Trading</option>
            <option value="long-term">Long-Term Investing</option>
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Experience Level</label>
          <select
            value={experience}
            onChange={e => setExperience(e.target.value)}
            className={styles.input}
            required
          >
            <option value="">Select level...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className={styles.btn}>
          Get Started
        </button>
      </form>
    </div>
  );
}
