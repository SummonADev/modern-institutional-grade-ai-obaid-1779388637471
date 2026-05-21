export type Plan = 'free' | 'pro' | 'elite';
export type RiskTolerance = 'conservative' | 'moderate' | 'aggressive';
export type AssetType = 'stocks' | 'crypto' | 'forex' | 'options';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  riskTolerance: RiskTolerance;
  preferredAssets: AssetType[];
  onboardingComplete: boolean;
  tradingStyle?: string;
  experience?: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  sector: string;
  aiScore: number;
  momentum: number;
  trend: 'bullish' | 'bearish' | 'neutral';
  sparkline: number[];
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
  sector: string;
  aiScore: number;
  allocation: number;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  aiScore: number;
  trend: 'bullish' | 'bearish' | 'neutral';
  sparkline: number[];
  note?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers: string[];
  summary: string;
  impact: 'high' | 'medium' | 'low';
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'signal' | 'news';
}

export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Trade {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  quantity: number;
  price: number;
  timestamp: string;
  status: 'filled' | 'pending' | 'cancelled';
  pnl?: number;
}

export interface AISignal {
  symbol: string;
  action: 'buy' | 'sell' | 'hold';
  confidence: number;
  reason: string;
  targetPrice: number;
  stopLoss: number;
  timeframe: string;
}
