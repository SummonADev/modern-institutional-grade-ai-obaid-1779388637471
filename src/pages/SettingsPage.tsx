import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { useAuth } from '@/hooks/useAuth';

export function SettingsPage() {
  const { profile, updateProfile, logout } = useAuth();
  const [name, setName] = useState(profile?.name || '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateProfile({ name });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '560px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Settings</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Manage your account and preferences</p>
      </div>

      <Card padding="lg">
        <h2 style={{ fontSize: '14px', fontWeight: 600, color: '#c9d4e0', marginBottom: '16px' }}>Profile</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#8b9ab0', marginBottom: '6px' }}>Display Name</label>
            <input value={name} onChange={e => setName(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', background: '#131c2e', border: '1px solid #1e2d45', borderRadius: '8px', color: '#e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#8b9ab0', marginBottom: '6px' }}>Trading Style</label>
            <div style={{ padding: '9px 12px', background: '#0d1424', border: '1px solid #1e2d45', borderRadius: '8px', color: '#8b9ab0', fontSize: '13px' }}>
              {profile?.tradingStyle || 'Not set'}
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#8b9ab0', marginBottom: '6px' }}>Experience Level</label>
            <div style={{ padding: '9px 12px', background: '#0d1424', border: '1px solid #1e2d45', borderRadius: '8px', color: '#8b9ab0', fontSize: '13px' }}>
              {profile?.experience || 'Not set'}
            </div>
          </div>
          <button onClick={handleSave}
            style={{ padding: '10px 20px', background: '#2563eb', border: 'none', borderRadius: '8px', color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </Card>

      <Card padding="lg">
        <h2 style={{ fontSize: '14px', fontWeight: 600, color: '#c9d4e0', marginBottom: '16px' }}>Account</h2>
        <button onClick={logout}
          style={{ padding: '9px 18px', background: 'transparent', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
          Sign Out
        </button>
      </Card>
    </div>
  );
}
