export type UserProfile = {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'elite';
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
  trend?: 'up' | 'down' | 'neutral';
  sparkline?: number[];
};

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers: string[];
  url?: string;
};

export type Alert = {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'volume' | 'news' | 'ai';
};

export type WatchlistItem = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  targetPrice?: number;
  notes?: string;
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

export type TradeSignal = {
  id: string;
  symbol: string;
  name: string;
  action: 'buy' | 'sell' | 'hold';
  confidence: number;
  price: number;
  targetPrice: number;
  stopLoss: number;
  reasoning: string;
  timeframe: string;
  timestamp: string;
};
