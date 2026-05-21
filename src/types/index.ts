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
  trend?: 'bullish' | 'bearish' | 'neutral';
  sparkline?: number[];
};

export type WatchlistItem = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aiScore?: number;
  notes?: string;
  addedAt: string;
};

export type NewsItem = {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers: string[];
  summary?: string;
  url?: string;
};

export type Alert = {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'volume' | 'ai' | 'news';
};

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

export type PortfolioPosition = {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
  sector?: string;
};

export type ChartDataPoint = {
  time: string;
  value: number;
  volume?: number;
};
