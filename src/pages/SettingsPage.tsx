import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/Card';

export function SettingsPage() {
  const { profile } = useAuth();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div>
        <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Manage your account and preferences</p>
      </div>

      <Card padding="lg">
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>Profile</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Name</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.name || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Email</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.email || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Plan</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.plan || 'free'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Trading Style</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.tradingStyle || 'Not set'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Experience</span>
            <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>{profile?.experience || 'Not set'}</span>
          </div>
        </div>
      </Card>

      <Card padding="lg">
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>Risk Tolerance</h2>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          {(['low', 'medium', 'high'] as const).map((level) => (
            <div
              key={level}
              style={{
                flex: 1,
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-md)',
                border: `1px solid ${profile?.riskTolerance === level ? 'var(--color-accent-blue)' : 'var(--color-border)'}`,
                background: profile?.riskTolerance === level ? 'var(--color-accent-blue-dim)' : 'var(--color-bg-elevated)',
                textAlign: 'center',
                cursor: 'pointer',
                textTransform: 'capitalize',
                color: profile?.riskTolerance === level ? 'var(--color-accent-blue-bright)' : 'var(--color-text-secondary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
              }}
            >
              {level}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
