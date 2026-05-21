export type UserProfile = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type AppSettings = {
  theme: 'dark' | 'light';
  notifications: boolean;
  riskLevel: 'conservative' | 'moderate' | 'aggressive';
};

export type Stock = {
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
};

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

export type Alert = {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'bullish' | 'bearish' | 'neutral';
};

export type NewsItem = {
  id: string;
  headline: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers: string[];
  summary?: string;
};

export type Position = {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPercent: number;
  sector?: string;
};

export type WatchlistItem = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aiScore?: number;
  notes?: string;
};

export type Trade = {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  shares: number;
  price: number;
  timestamp: string;
  pnl?: number;
  status: 'open' | 'closed' | 'pending';
};

export type PortfolioSummary = {
  totalValue: number;
  dayPnl: number;
  dayPnlPercent: number;
  totalPnl: number;
  totalPnlPercent: number;
  cash: number;
};
