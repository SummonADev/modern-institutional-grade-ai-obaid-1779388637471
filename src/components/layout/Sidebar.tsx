import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Zap,
  TrendingUp,
  Search,
  Briefcase,
  Newspaper,
  Star,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/day-trading', label: 'Day Trading', icon: Zap },
  { path: '/investing', label: 'Long-Term', icon: TrendingUp },
  { path: '/discovery', label: 'Discovery', icon: Search },
  { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { path: '/watchlist', label: 'Watchlists', icon: Star },
  { path: '/news', label: 'News & Catalysts', icon: Newspaper },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const location = useLocation();
  const { profile } = useAuth();

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Activity size={20} className={styles.logoIcon} />
          {!collapsed && <span className={styles.logoText}>AlphaEdge</span>}
        </div>
        <button onClick={onToggle} className={styles.toggleBtn}>
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <div className={styles.regimeBadge}>
        <span className={styles.regimeDot} />
        {!collapsed && <span className={styles.regimeText}>Neutral Bullish</span>}
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={16} className={styles.navIcon} />
              {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
              {!collapsed && item.path === '/day-trading' && (
                <span className={styles.liveBadge}>LIVE</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            {profile?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
          {!collapsed && (
            <div className={styles.userDetails}>
              <div className={styles.userName}>{profile?.name || 'Trader'}</div>
              <div className={styles.userRole}>Pro Account</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
