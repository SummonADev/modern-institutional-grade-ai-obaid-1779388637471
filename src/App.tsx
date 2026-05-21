import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { AppShell } from '@/components/layout/AppShell';
import { DashboardPage } from '@/pages/DashboardPage';
import { DayTradingPage } from '@/pages/DayTradingPage';
import { InvestingPage } from '@/pages/InvestingPage';
import { DiscoveryPage } from '@/pages/DiscoveryPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { NewsPage } from '@/pages/NewsPage';
import { WatchlistPage } from '@/pages/WatchlistPage';
import { SettingsPage } from '@/pages/SettingsPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, isLoading, profile } = useAuth();
  if (isLoading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#080c14', color: '#8b9ab0', fontSize: '13px' }}>Loading AlphaEdge...</div>;
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (isLoggedIn && profile && !profile.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}

export default function App() {
  const { isLoggedIn, isLoading, profile } = useAuth();

  if (isLoading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#080c14', color: '#8b9ab0', fontSize: '13px' }}>Loading AlphaEdge...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isLoggedIn && profile?.onboardingComplete ? <Navigate to="/" replace /> : <AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/signup" element={isLoggedIn && profile?.onboardingComplete ? <Navigate to="/" replace /> : <AuthLayout><SignupPage /></AuthLayout>} />
        <Route path="/onboarding" element={isLoggedIn ? <OnboardingPage /> : <Navigate to="/login" replace />} />
        <Route path="/*" element={
          <ProtectedRoute>
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
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
