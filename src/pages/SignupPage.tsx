import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import styles from './AuthPages.module.css';

export function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await signup(name, email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.title}>Create account</h2>
      <p className={styles.subtitle}>Join AlphaEdge and start trading smarter</p>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Full Name</label>
          <input className={styles.input} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required autoFocus />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
        </div>
        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
      <p className={styles.switchAuth}>Already have an account? <Link to="/login" className={styles.link}>Sign in</Link></p>
    </div>
  );
}
