import { useState } from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { MARKET_INDICES } from '@/lib/mockData';
import { ALERTS } from '@/lib/mockData';
import styles from './TopBar.module.css';

export function TopBar() {
  const { logout } = useAuth();
  const [showAlerts, setShowAlerts] = useState(false);
  const unreadCount = ALERTS.filter(a => !a.read).length;

  return (
    <header className={styles.topBar}>
      <div className={styles.tickerStrip}>
        {MARKET_INDICES.slice(0, 5).map((index) => (
          <div key={index.symbol} className={styles.tickerItem}>
            <span className={styles.tickerSymbol}>{index.symbol}</span>
            <span className={styles.tickerPrice}>{typeof index.price === 'number' && index.price > 1000 ? index.price.toLocaleString() : index.price}</span>
            <span className={index.changePercent >= 0 ? styles.tickerUp : styles.tickerDown}>
              {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.searchBtn}>
          <Search size={14} />
          <span>Search...</span>
        </button>

        <div className={styles.bellWrapper}>
          <button className={styles.iconBtn} onClick={() => setShowAlerts(!showAlerts)}>
            <Bell size={15} />
            {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
          </button>

          {showAlerts && (
            <div className={styles.alertDropdown}>
              <div className={styles.alertHeader}>Alerts</div>
              {ALERTS.map((alert) => (
                <div key={alert.id} className={`${styles.alertItem} ${!alert.read ? styles.alertUnread : ''}`}>
                  <div className={styles.alertTicker}>{alert.ticker}</div>
                  <div className={styles.alertMsg}>{alert.message}</div>
                  <div className={styles.alertTime}>{alert.timestamp}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className={styles.iconBtn} onClick={logout} title="Logout">
          <LogOut size={15} />
        </button>
      </div>
    </header>
  );
}
