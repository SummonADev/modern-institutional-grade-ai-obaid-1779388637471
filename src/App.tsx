import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { DashboardPage } from '@/pages/DashboardPage';
import { DayTradingPage } from '@/pages/DayTradingPage';
import { InvestingPage } from '@/pages/InvestingPage';
import { DiscoveryPage } from '@/pages/DiscoveryPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { NewsPage } from '@/pages/NewsPage';
import { WatchlistPage } from '@/pages/WatchlistPage';
import { SettingsPage } from '@/pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/day-trading" element={<DayTradingPage />} />
          <Route path="/investing" element={<InvestingPage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
