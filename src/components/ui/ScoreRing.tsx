import styles from './ScoreRing.module.css';

type ScoreRingProps = {
  score: number;
  size?: number;
};

export function ScoreRing({ score, size = 60 }: ScoreRingProps) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const color = score >= 75 ? '#22c55e' : score >= 50 ? '#60a5fa' : score >= 30 ? '#f59e0b' : '#ef4444';

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      <svg className={styles.svg} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={4} />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={4}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className={styles.center}>
        <span className={styles.score} style={{ color, fontSize: size < 50 ? '11px' : '14px' }}>{score}</span>
        {size >= 50 && <span className={styles.label}>AI</span>}
      </div>
    </div>
  );
}
