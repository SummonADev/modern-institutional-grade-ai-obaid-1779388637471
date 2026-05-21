import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/Card';
import styles from './AuthPages.module.css';

export function SettingsPage() {
  const { profile } = useAuth();

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
        Settings
      </h1>
      <Card padding="lg">
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
          Profile
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Name</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.name || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Email</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.email || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Trading Style</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.tradingStyle || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3) 0' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Experience</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.experience || 'Not set'}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
