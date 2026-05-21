import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function OnboardingPage() {
  const { profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [tradingStyle, setTradingStyle] = useState<string>('');
  const [experience, setExperience] = useState<string>('');

  const styles: Record<string, React.CSSProperties> = {
    container: { minHeight: '100vh', background: '#080c14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' },
    card: { background: '#0d1424', border: '1px solid #1e2d45', borderRadius: '16px', padding: '40px', maxWidth: '480px', width: '100%' },
    title: { fontSize: '22px', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' },
    subtitle: { fontSize: '14px', color: '#8b9ab0', marginBottom: '32px', lineHeight: 1.5 },
    optionBtn: { display: 'block', width: '100%', textAlign: 'left' as const, padding: '14px 18px', marginBottom: '10px', background: '#131c2e', border: '1px solid #1e2d45', borderRadius: '10px', color: '#c9d4e0', fontSize: '14px', cursor: 'pointer', transition: 'all 0.15s' },
    optionBtnActive: { display: 'block', width: '100%', textAlign: 'left' as const, padding: '14px 18px', marginBottom: '10px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '10px', color: '#93c5fd', fontSize: '14px', cursor: 'pointer', transition: 'all 0.15s' },
    nextBtn: { marginTop: '24px', width: '100%', padding: '12px', background: '#2563eb', border: 'none', borderRadius: '10px', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' },
    skipBtn: { marginTop: '12px', width: '100%', padding: '10px', background: 'transparent', border: '1px solid #1e2d45', borderRadius: '10px', color: '#8b9ab0', fontSize: '14px', cursor: 'pointer' },
    steps: { display: 'flex', gap: '6px', marginBottom: '28px' },
    stepDot: { height: '4px', borderRadius: '2px', flex: 1, background: '#1e2d45' },
    stepDotActive: { height: '4px', borderRadius: '2px', flex: 1, background: '#2563eb' },
  };

  const handleFinish = () => {
    updateProfile({ onboardingComplete: true, tradingStyle, experience });
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.steps}>
          {[0, 1].map(i => (
            <div key={i} style={i <= step ? styles.stepDotActive : styles.stepDot} />
          ))}
        </div>

        {step === 0 && (
          <>
            <div style={styles.title}>What's your trading style?</div>
            <div style={styles.subtitle}>We'll personalize your experience based on how you trade.</div>
            {['Day Trader', 'Swing Trader', 'Long-Term Investor', 'Mixed / Hybrid'].map(opt => (
              <button key={opt} style={tradingStyle === opt ? styles.optionBtnActive : styles.optionBtn} onClick={() => setTradingStyle(opt)}>{opt}</button>
            ))}
            <button style={styles.nextBtn} onClick={() => setStep(1)} disabled={!tradingStyle}>Continue</button>
          </>
        )}

        {step === 1 && (
          <>
            <div style={styles.title}>What's your experience level?</div>
            <div style={styles.subtitle}>This helps us show the right level of detail and analysis.</div>
            {['Beginner (< 1 year)', 'Intermediate (1–3 years)', 'Advanced (3–7 years)', 'Expert (7+ years)'].map(opt => (
              <button key={opt} style={experience === opt ? styles.optionBtnActive : styles.optionBtn} onClick={() => setExperience(opt)}>{opt}</button>
            ))}
            <button style={styles.nextBtn} onClick={handleFinish} disabled={!experience}>Get Started</button>
            <button style={styles.skipBtn} onClick={() => setStep(0)}>Back</button>
          </>
        )}
      </div>
    </div>
  );
}
