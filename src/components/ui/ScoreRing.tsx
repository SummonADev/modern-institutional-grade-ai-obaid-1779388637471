import styles from './ScoreRing.module.css';

type ScoreRingProps = {
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
};

export function ScoreRing({ score, size = 64, strokeWidth = 5, label }: ScoreRingProps) {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 80 ? '#22c55e' :
    score >= 70 ? '#60a5fa' :
    score >= 60 ? '#f59e0b' :
    '#ef4444';

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      <div className={styles.center}>
        <span className={styles.score} style={{ color }}>{score}</span>
        {label && <span className={styles.label}>{label}</span>}
      </div>
    </div>
  );
}
