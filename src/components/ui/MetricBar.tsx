import styles from './MetricBar.module.css';

type MetricBarProps = {
  label: string;
  value: number;
  max?: number;
  color?: string;
};

export function MetricBar({ label, value, max = 100, color }: MetricBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  const barColor = color ||
    (value >= 80 ? '#22c55e' : value >= 60 ? '#60a5fa' : value >= 40 ? '#f59e0b' : '#ef4444');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value} style={{ color: barColor }}>{value}</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${pct}%`, background: barColor }} />
      </div>
    </div>
  );
}
