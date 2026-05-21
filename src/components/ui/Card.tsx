import { clsx } from 'clsx';
import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
};

export function Card({ children, className, glass, hover, padding = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        glass && styles.glass,
        hover && styles.hover,
        padding === 'sm' && styles.paddingSm,
        padding === 'md' && styles.paddingMd,
        padding === 'lg' && styles.paddingLg,
        padding === 'none' && styles.paddingNone,
        className
      )}
    >
      {children}
    </div>
  );
}
