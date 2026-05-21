export type MarketRegime =
  | 'Bullish'
  | 'Neutral Bullish'
  | 'Neutral'
  | 'Neutral Bearish'
  | 'Bearish'
  | 'High Volatility Risk-Off';

export type SetupType =
  | 'Bull Flag'
  | 'Opening Range Breakout'
  | 'VWAP Reclaim'
  | 'Fair Value Gap'
  | 'Trend Continuation'
  | 'Consolidation Breakout'
  | 'Liquidity Sweep'
  | 'Trend Reversal'
  | 'Momentum Exhaustion';

export type StockCategory =
  | 'Early Growth Expansion'
  | 'Fundamental Repricing'
  | 'Institutional Accumulation'
  | 'Strong Compounder'
  | 'Momentum Building'
  | 'Undervalued Growth'
  | 'Near Peak'
  | 'Overextended';

export type EntryQuality =
  | 'Excellent Entry'
  | 'Good Entry'
  | 'Neutral Entry'
  | 'Risky Entry'
  | 'Avoid Chasing';

export type TradeSentiment = 'bullish' | 'bearish' | 'neutral';

export interface DayTradeCandidate {
  id: string;
  ticker: string;
  company: string;
  setupType: SetupType;
  confidenceScore: number;
  entryZone: [number, number];
  stopLoss: number;
  takeProfits: [number, number, number];
  riskReward: number;
  currentPrice: number;
  change: number;
  changePercent: number;
  volume: number;
  relVolume: number;
  float: number;
  vwap: number;
  atr: number;
  catalystSummary: string;
  aiReasoning: string;
  patternExplanation: string;
  vwapBehavior: string;
  structureAnalysis: string;
  volumeAnalysis: string;
  keyRisks: string[];
  regimeCompatibility: string;
  momentumStrength: number;
  liquidityScore: number;
  structureScore: number;
  catalystScore: number;
  sector: string;
  preMarketHigh: number;
  preMarketLow: number;
}

export interface LongTermOpportunity {
  id: string;
  ticker: string;
  company: string;
  sector: string;
  category: StockCategory;
  opportunityScore: number;
  entryQuality: EntryQuality;
  currentPrice: number;
  change: number;
  changePercent: number;
  marketCap: string;
  targetPrice: number;
  upside: number;
  aiThesis: string;
  businessModel: string;
  growthDrivers: string[];
  keyRisks: string[];
  fundamentalScore: number;
  growthScore: number;
  valuationScore: number;
  catalystScore: number;
  institutionalScore: number;
  sustainabilityScore: number;
  aiConfidenceScore: number;
  riskScore: number;
  forwardPE: number;
  pegRatio: number;
  evEbitda: number;
  priceToSales: number;
  revenueGrowth: number;
  marginTrend: string;
  insiderActivity: string;
  institutionalChange: string;
  sharaiaCompliant: boolean;
  analystTarget: number;
  analystCount: number;
}

export interface PortfolioPosition {
  id: string;
  ticker: string;
  company: string;
  sector: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number;
  unrealizedPL: number;
  unrealizedPLPercent: number;
  weight: number;
  dayChange: number;
  dayChangePercent: number;
  entryDate: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  ticker: string;
  sentiment: TradeSentiment;
  urgency: 'high' | 'medium' | 'low';
  catalystStrength: number;
  publishedAt: string;
  summary: string;
  aiAnalysis: string;
  isNoise: boolean;
}

export interface WatchlistItem {
  id: string;
  ticker: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  relVolume: number;
  aiScore: number;
  trend: TradeSentiment;
  catalyst: string;
  sector: string;
}

export interface WatchlistGroup {
  id: string;
  name: string;
  items: WatchlistItem[];
}

export interface UserProfile {
  name: string;
  email: string;
  investingStyle: 'day-trader' | 'long-term' | 'both';
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  accountSize: string;
  experience: string;
  sectors: string[];
  onboardingComplete: boolean;
  shariahMode: boolean;
  apiKeys: {
    polygon: string;
    fmp: string;
    benzinga: string;
    alpaca: string;
    alpacaSecret: string;
    openai: string;
    anthropic: string;
  };
}

export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  trend: TradeSentiment;
}

export interface Alert {
  id: string;
  type: 'breakout' | 'volume' | 'earnings' | 'score' | 'regime' | 'risk' | 'watchlist';
  ticker: string;
  message: string;
  urgency: 'high' | 'medium' | 'low';
  timestamp: string;
  read: boolean;
}
