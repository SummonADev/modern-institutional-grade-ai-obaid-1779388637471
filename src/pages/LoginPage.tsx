import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import styles from './AuthPages.module.css';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.title}>Welcome back</h2>
      <p className={styles.subtitle}>Sign in to your AlphaEdge account</p>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required autoFocus />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
        </div>
        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <p className={styles.switchAuth}>Don't have an account? <Link to="/signup" className={styles.link}>Sign up</Link></p>
    </div>
  );
}
