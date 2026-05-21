export type UserProfile = {
  id: string;
  name: string;
  email: string;
  plan?: string;
  tradingStyle?: string;
  experience?: string;
  riskTolerance?: string;
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
  technical?: number;
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
  type?: 'bullish' | 'bearish' | 'neutral';
};

export type NewsItem = {
  id: string;
  headline: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers?: string[];
  summary?: string;
};

export type WatchlistItem = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  alertPrice?: number;
  notes?: string;
};

export type Trade = {
  id: string;
  symbol: string;
  side: 'long' | 'short';
  entry: number;
  current: number;
  size: number;
  pnl: number;
  pnlPercent: number;
  openedAt: string;
};

export type PortfolioPosition = {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  current: number;
  value: number;
  pnl: number;
  pnlPercent: number;
  allocation: number;
  sector?: string;
};
