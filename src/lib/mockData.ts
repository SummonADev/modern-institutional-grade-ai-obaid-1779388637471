export type Stock = {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  changePercent: number;
  aiScore: number;
  signal: 'BUY' | 'SELL' | 'HOLD';
  momentum: number;
  volumeScore: number;
  fundamentals: number;
  volatility: number;
  sparkline: number[];
};

export type MarketIndex = {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
};

export type NewsArticle = {
  id: string;
  headline: string;
  summary: string;
  source: string;
  timestamp: string;
  tickers?: string[];
  sentiment: 'bullish' | 'bearish' | 'neutral';
  impact?: 'high' | 'medium' | 'low';
};

export type Alert = {
  id: string;
  ticker: string;
  message: string;
  timestamp: string;
  read: boolean;
};

function sparkline(base: number, n = 20): number[] {
  const arr: number[] = [base];
  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] * (1 + (Math.random() - 0.48) * 0.03));
  }
  return arr;
}

export const STOCKS: Stock[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 189.84, changePercent: 1.23, aiScore: 82, signal: 'BUY', momentum: 76, volumeScore: 88, fundamentals: 85, volatility: 42, sparkline: sparkline(189) },
  { ticker: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 487.21, changePercent: 3.45, aiScore: 91, signal: 'BUY', momentum: 94, volumeScore: 97, fundamentals: 78, volatility: 88, sparkline: sparkline(487) },
  { ticker: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 374.51, changePercent: 0.67, aiScore: 79, signal: 'HOLD', momentum: 65, volumeScore: 72, fundamentals: 91, volatility: 35, sparkline: sparkline(374) },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 140.93, changePercent: -0.45, aiScore: 75, signal: 'HOLD', momentum: 58, volumeScore: 63, fundamentals: 88, volatility: 48, sparkline: sparkline(140) },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer', price: 178.25, changePercent: 2.11, aiScore: 84, signal: 'BUY', momentum: 81, volumeScore: 79, fundamentals: 82, volatility: 56, sparkline: sparkline(178) },
  { ticker: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer', price: 242.84, changePercent: -2.34, aiScore: 62, signal: 'HOLD', momentum: 55, volumeScore: 91, fundamentals: 54, volatility: 92, sparkline: sparkline(242) },
  { ticker: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 484.10, changePercent: 1.88, aiScore: 87, signal: 'BUY', momentum: 83, volumeScore: 85, fundamentals: 80, volatility: 61, sparkline: sparkline(484) },
  { ticker: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Finance', price: 197.45, changePercent: 0.34, aiScore: 71, signal: 'HOLD', momentum: 60, volumeScore: 55, fundamentals: 78, volatility: 38, sparkline: sparkline(197) },
  { ticker: 'V', name: 'Visa Inc.', sector: 'Finance', price: 275.82, changePercent: 0.52, aiScore: 73, signal: 'HOLD', momentum: 63, volumeScore: 58, fundamentals: 84, volatility: 30, sparkline: sparkline(275) },
  { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 158.34, changePercent: -0.21, aiScore: 66, signal: 'HOLD', momentum: 47, volumeScore: 44, fundamentals: 79, volatility: 22, sparkline: sparkline(158) },
  { ticker: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 168.42, changePercent: 4.21, aiScore: 88, signal: 'BUY', momentum: 91, volumeScore: 93, fundamentals: 72, volatility: 85, sparkline: sparkline(168) },
  { ticker: 'PLTR', name: 'Palantir Technologies', sector: 'Technology', price: 24.18, changePercent: 5.67, aiScore: 79, signal: 'BUY', momentum: 88, volumeScore: 95, fundamentals: 55, volatility: 91, sparkline: sparkline(24) },
  { ticker: 'COIN', name: 'Coinbase Global Inc.', sector: 'Finance', price: 184.52, changePercent: -3.12, aiScore: 58, signal: 'SELL', momentum: 42, volumeScore: 88, fundamentals: 45, volatility: 95, sparkline: sparkline(184) },
  { ticker: 'RIVN', name: 'Rivian Automotive', sector: 'Consumer', price: 16.84, changePercent: -1.45, aiScore: 44, signal: 'SELL', momentum: 35, volumeScore: 72, fundamentals: 32, volatility: 89, sparkline: sparkline(16) },
  { ticker: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 107.23, changePercent: 0.89, aiScore: 68, signal: 'HOLD', momentum: 55, volumeScore: 49, fundamentals: 72, volatility: 40, sparkline: sparkline(107) },
  { ticker: 'CVX', name: 'Chevron Corporation', sector: 'Energy', price: 154.67, changePercent: 0.45, aiScore: 65, signal: 'HOLD', momentum: 51, volumeScore: 46, fundamentals: 70, volatility: 36, sparkline: sparkline(154) },
  { ticker: 'GE', name: 'GE Aerospace', sector: 'Industrial', price: 148.92, changePercent: 1.23, aiScore: 74, signal: 'BUY', momentum: 70, volumeScore: 65, fundamentals: 74, volatility: 52, sparkline: sparkline(148) },
  { ticker: 'BA', name: 'Boeing Company', sector: 'Industrial', price: 198.45, changePercent: -0.78, aiScore: 55, signal: 'HOLD', momentum: 44, volumeScore: 58, fundamentals: 48, volatility: 65, sparkline: sparkline(198) },
  { ticker: 'PFE', name: 'Pfizer Inc.', sector: 'Healthcare', price: 28.14, changePercent: -1.12, aiScore: 48, signal: 'SELL', momentum: 38, volumeScore: 42, fundamentals: 58, volatility: 44, sparkline: sparkline(28) },
  { ticker: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 521.34, changePercent: 0.67, aiScore: 77, signal: 'BUY', momentum: 68, volumeScore: 61, fundamentals: 86, volatility: 28, sparkline: sparkline(521) },
];

export const MARKET_INDICES: MarketIndex[] = [
  { symbol: 'SPX', name: 'S&P 500', price: 4783.45, changePercent: 0.84 },
  { symbol: 'NDX', name: 'NASDAQ 100', price: 16742.39, changePercent: 1.23 },
  { symbol: 'DJI', name: 'Dow Jones', price: 37440.28, changePercent: 0.56 },
  { symbol: 'VIX', name: 'Volatility Index', price: 13.24, changePercent: -3.45 },
  { symbol: 'RUT', name: 'Russell 2000', price: 1987.65, changePercent: 0.34 },
];

export const NEWS: NewsArticle[] = [
  {
    id: '1',
    headline: 'NVIDIA Surges as AI Chip Demand Reaches Record Levels',
    summary: 'NVIDIA reported quarterly earnings that exceeded analyst expectations by 40%, driven by unprecedented demand for H100 GPUs from hyperscalers and enterprise AI deployments.',
    source: 'Market Watch',
    timestamp: '2 hours ago',
    tickers: ['NVDA', 'AMD'],
    sentiment: 'bullish',
    impact: 'high',
  },
  {
    id: '2',
    headline: 'Federal Reserve Signals Potential Rate Cuts in 2024',
    summary: 'Fed Chair Powell hinted at three potential rate cuts in 2024, sending markets broadly higher. Technology and growth stocks led the rally.',
    source: 'Reuters',
    timestamp: '4 hours ago',
    tickers: ['SPX', 'QQQ'],
    sentiment: 'bullish',
    impact: 'high',
  },
  {
    id: '3',
    headline: 'Tesla Faces Production Challenges at Gigafactory Berlin',
    summary: 'Arson attack near Gigafactory Berlin halted production, affecting quarterly delivery estimates. Analysts revised target prices downward.',
    source: 'Bloomberg',
    timestamp: '6 hours ago',
    tickers: ['TSLA'],
    sentiment: 'bearish',
    impact: 'medium',
  },
  {
    id: '4',
    headline: 'Apple Vision Pro Launches to Mixed Reviews, Strong Pre-Orders',
    summary: 'Apple\'s spatial computing headset launched to enthusiastic early adopters despite mixed mainstream reviews. Analyst estimates range from 400K to 1M units in first year.',
    source: 'CNBC',
    timestamp: '8 hours ago',
    tickers: ['AAPL'],
    sentiment: 'neutral',
    impact: 'medium',
  },
  {
    id: '5',
    headline: 'Palantir Wins $250M Government AI Contract',
    summary: 'Palantir Technologies secured a major U.S. Army AI contract, boosting government revenue segment. Shares surged in after-hours trading.',
    source: 'Defense News',
    timestamp: '10 hours ago',
    tickers: ['PLTR'],
    sentiment: 'bullish',
    impact: 'high',
  },
  {
    id: '6',
    headline: 'Oil Prices Stabilize Amid Middle East Tensions',
    summary: 'Crude oil prices found support around $78/barrel as geopolitical risks balanced against demand concerns from slowing Chinese growth.',
    source: 'Financial Times',
    timestamp: '12 hours ago',
    tickers: ['XOM', 'CVX'],
    sentiment: 'neutral',
    impact: 'low',
  },
];

export const ALERTS: Alert[] = [
  { id: '1', ticker: 'NVDA', message: 'Price crossed above 200-day MA. Strong bullish signal detected.', timestamp: '5 min ago', read: false },
  { id: '2', ticker: 'TSLA', message: 'Unusual options activity detected. Put/call ratio spike.', timestamp: '22 min ago', read: false },
  { id: '3', ticker: 'AMD', message: 'AI Score upgraded to 88. Momentum breakout pattern forming.', timestamp: '1 hr ago', read: true },
  { id: '4', ticker: 'AAPL', message: 'Earnings release in 3 days. Consider position sizing.', timestamp: '2 hr ago', read: true },
];
