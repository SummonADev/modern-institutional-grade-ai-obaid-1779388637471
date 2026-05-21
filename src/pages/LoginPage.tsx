import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPages.module.css';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Card } from '@/components/ui/Card';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Simulate login - store a profile in localStorage
      const profile = {
        id: '1',
        name: email.split('@')[0] || 'Trader',
        email,
        riskTolerance: 'moderate' as const,
        tradingStyle: 'mixed' as const,
        experience: 'intermediate' as const,
        preferredSectors: ['Technology', 'Healthcare'],
      };
      localStorage.setItem('user_profile', JSON.stringify(profile));
      navigate('/');
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card padding="lg" className={styles.card}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to your AlphaEdge account</p>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className={styles.switchText}>
          Don't have an account?{' '}
          <a href="/signup" className={styles.link}>Sign up</a>
        </p>
      </Card>
    </AuthLayout>
  );
}
