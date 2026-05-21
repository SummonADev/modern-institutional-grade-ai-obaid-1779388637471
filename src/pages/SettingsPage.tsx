import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/types';

const RISK_LEVELS: UserProfile['riskTolerance'][] = ['conservative', 'moderate', 'aggressive'];

export function SettingsPage() {
  const { profile, updateProfile } = useAuth();

  return (
    <div style={{ padding: '1.5rem', maxWidth: 600 }}>
      <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>Settings</h2>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Account Plan</span>
          <span style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>Pro</span>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Name</span>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 500, marginTop: 4 }}>{profile?.name || 'Trader'}</div>
        </div>
        <div>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>Email</span>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 500, marginTop: 4 }}>{profile?.email || '-'}</div>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem' }}>
        <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 12 }}>Risk Tolerance</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {RISK_LEVELS.map((level) => (
            <button
              key={level}
              onClick={() => updateProfile({ riskTolerance: level })}
              style={{
                flex: 1,
                padding: '8px 0',
                borderRadius: 6,
                border: `1px solid ${profile?.riskTolerance === level ? 'var(--color-accent-blue)' : 'var(--color-border)'}`,
                background: profile?.riskTolerance === level ? 'var(--color-accent-blue-dim)' : 'var(--color-bg-elevated)',
                cursor: 'pointer',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'capitalize',
                color: profile?.riskTolerance === level ? 'var(--color-accent-blue-bright)' : 'var(--color-text-secondary)',
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
