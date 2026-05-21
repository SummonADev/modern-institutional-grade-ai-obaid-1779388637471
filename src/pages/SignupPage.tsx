import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPages.module.css';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Card } from '@/components/ui/Card';

export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Simulate signup - store a profile in localStorage
      const profile = {
        id: Date.now().toString(),
        name: name || email.split('@')[0] || 'Trader',
        email,
        riskTolerance: 'moderate' as const,
        tradingStyle: 'mixed' as const,
        experience: 'beginner' as const,
        preferredSectors: ['Technology'],
      };
      localStorage.setItem('user_profile', JSON.stringify(profile));
      navigate('/');
    } catch {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card padding="lg" className={styles.card}>
        <h1 className={styles.title}>Create account</h1>
        <p className={styles.subtitle}>Join AlphaEdge and start trading smarter</p>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Your name"
            />
          </div>
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
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>
        <p className={styles.switchText}>
          Already have an account?{' '}
          <a href="/login" className={styles.link}>Sign in</a>
        </p>
      </Card>
    </AuthLayout>
  );
}
