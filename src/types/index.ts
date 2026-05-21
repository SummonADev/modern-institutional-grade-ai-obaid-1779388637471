export type UserProfile = {
  id: string;
  name: string;
  email: string;
  tradingStyle: 'day-trading' | 'swing' | 'long-term' | 'mixed';
  experience: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  joinedAt: string;
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
  priceHistory?: number[];
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

export type PortfolioPosition = {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  change: number;
  changePercent: number;
  value: number;
  gainLoss: number;
  gainLossPercent: number;
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
  addedAt: string;
};

export type Alert = {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'news' | 'technical' | 'ai';
};

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

export type Sector = {
  name: string;
  performance: number;
  momentum: string;
};
