export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tradingStyle?: string;
  experience?: string;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
  riskLevel: 'conservative' | 'moderate' | 'aggressive';
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
  signals?: StockSignal[];
  chart?: number[];
}

export interface StockSignal {
  type: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  reason: string;
  timeframe?: string;
}

export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers?: string[];
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'signal' | 'news';
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  chart?: number[];
  notes?: string;
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
