export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferredSectors?: string[];
  riskTolerance?: 'conservative' | 'moderate' | 'aggressive';
  tradingStyle?: 'day-trader' | 'swing-trader' | 'investor';
}

export interface AppSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
  autoRefresh: boolean;
  refreshInterval: number;
  defaultView: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap?: number;
  sector?: string;
  aiScore?: number;
  momentum?: number;
  sentiment?: number;
  risk?: number;
  sparkline?: number[];
}

export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type?: 'bullish' | 'bearish' | 'neutral';
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  tickers?: string[];
  sentiment?: 'bullish' | 'bearish' | 'neutral';
  category?: string;
}

export interface PortfolioPosition {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  value: number;
  gainLoss: number;
  gainLossPercent: number;
  sector?: string;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aiScore?: number;
  notes?: string;
}
