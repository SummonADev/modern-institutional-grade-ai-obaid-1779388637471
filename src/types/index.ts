export type AssetClass = 'stocks' | 'options' | 'crypto' | 'etfs' | 'forex';

export type RiskTolerance = 'conservative' | 'moderate' | 'aggressive';

export type Plan = 'free' | 'pro' | 'enterprise';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  riskTolerance: RiskTolerance;
  preferredAssets: AssetClass[];
  onboardingComplete: boolean;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
  soundAlerts: boolean;
  defaultView: string;
  currency: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  sector: string;
  aiScore: number;
  momentum: number;
  sentiment: number;
  riskScore: number;
  sparkline: number[];
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
  headline: string;
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
  type: 'price' | 'volume' | 'ai' | 'news';
}

export interface PortfolioPosition {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  value: number;
  gain: number;
  gainPercent: number;
  sector: string;
  aiScore: number;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aiScore: number;
  notes?: string;
}

export interface TradeSignal {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  entry: number;
  target: number;
  stopLoss: number;
  timeframe: string;
  reasoning: string;
  timestamp: string;
}
