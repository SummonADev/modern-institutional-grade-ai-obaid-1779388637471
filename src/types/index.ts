export type Plan = 'free' | 'pro' | 'elite';
export type RiskTolerance = 'low' | 'medium' | 'high';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  riskTolerance: RiskTolerance;
  joinedAt: string;
  tradingStyle?: string;
  experience?: string;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
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
  sentiment?: 'bullish' | 'bearish' | 'neutral';
  chartData?: number[];
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type?: 'price' | 'news' | 'ai';
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
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers?: string[];
  summary?: string;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aiScore?: number;
  chartData?: number[];
}

export interface PortfolioPosition {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
  aiScore?: number;
}
