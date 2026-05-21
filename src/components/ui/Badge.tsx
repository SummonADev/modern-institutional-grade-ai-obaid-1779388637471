import { clsx } from 'clsx';
import styles from './Badge.module.css';

type BadgeVariant = 'bullish' | 'bearish' | 'neutral' | 'blue' | 'purple' | 'cyan' | 'default';

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  dot?: boolean;
};

export function Badge({ children, variant = 'default', size = 'md', dot }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant], size === 'sm' && styles.small)}>
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
}
