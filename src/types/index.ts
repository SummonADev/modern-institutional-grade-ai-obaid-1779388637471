export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tradingStyle?: string;
  experience?: string;
  onboardingComplete?: boolean;
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
  momentum?: number;
  sentiment?: number;
  riskScore?: number;
  sparkline?: number[];
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
  tickers: string[];
  url?: string;
}

export interface Alert {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'price' | 'volume' | 'news' | 'ai';
}

export interface PortfolioPosition {
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
  aiScore?: number;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  aiScore?: number;
  notes?: string;
  addedAt: string;
}

export interface TradeSignal {
  id: string;
  symbol: string;
  name: string;
  action: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  price: number;
  targetPrice: number;
  stopLoss: number;
  timeframe: string;
  reasoning: string;
  aiScore: number;
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface SectorData {
  name: string;
  performance: number;
  momentum: number;
  aiScore: number;
}

export interface ChartDataPoint {
  time: string;
  value: number;
  volume?: number;
}

export interface ScreenerFilter {
  minPrice?: number;
  maxPrice?: number;
  minVolume?: number;
  minAiScore?: number;
  sectors?: string[];
  signals?: ('BUY' | 'SELL' | 'HOLD')[];
}
