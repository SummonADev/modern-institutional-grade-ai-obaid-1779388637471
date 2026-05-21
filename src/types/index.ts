export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  tradingStyle: 'day-trading' | 'swing' | 'long-term' | 'mixed';
  experience: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  preferredSectors: string[];
}

export interface AppSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
  soundAlerts: boolean;
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
  technicalScore?: number;
  fundamentalScore?: number;
  sentimentScore?: number;
  riskScore?: number;
  priceHistory?: number[];
}

export interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  shares: number;
  price: number;
  total: number;
  timestamp: string;
  status: 'open' | 'closed' | 'pending';
  pnl?: number;
  pnlPercent?: number;
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'volume' | 'news' | 'technical';
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
  summary: string;
  source: string;
  timestamp: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  tickers: string[];
  relevanceScore: number;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  notes?: string;
  alertPrice?: number;
}
