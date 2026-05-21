import { useState } from 'react';
import { Star, Plus, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MiniChart } from '@/components/ui/MiniChart';
import { STOCKS } from '@/lib/mockData';

const DEFAULT_WATCHLIST = ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'AMZN'];

export function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<string[]>(DEFAULT_WATCHLIST);

  const watchlistStocks = STOCKS.filter(s => watchlist.includes(s.ticker));
  const otherStocks = STOCKS.filter(s => !watchlist.includes(s.ticker)).slice(0, 8);

  const toggleWatchlist = (ticker: string) => {
    setWatchlist((prev: string[]) => prev.includes(ticker) ? prev.filter((t: string) => t !== ticker) : [...prev, ticker]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Watchlists</h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Track your favorite stocks and monitor key metrics.</p>
      </div>

      <Card padding="none">
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={14} style={{ color: 'var(--color-neutral)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>My Watchlist</span>
            <Badge variant="neutral" size="sm">{watchlist.length}</Badge>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: 'var(--color-accent-blue-dim)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', color: 'var(--color-accent-blue-bright)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
            <Plus size={12} />
            Add Stock
          </button>
        </div>

        <div>
          {watchlistStocks.length === 0 ? (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '13px' }}>
              No stocks in watchlist. Add some below.
            </div>
          ) : (
            watchlistStocks.map((stock) => (
              <div key={stock.ticker} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 80px 32px', alignItems: 'center', gap: '12px', padding: '10px 16px', borderBottom: '1px solid var(--color-border-subtle)', transition: 'background 0.15s' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>{stock.ticker}</span>
                    <Badge variant={stock.signal === 'BUY' ? 'bullish' : stock.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">{stock.signal}</Badge>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{stock.name}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>${stock.price.toFixed(2)}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-mono)', color: stock.changePercent >= 0 ? 'var(--color-bullish-text)' : 'var(--color-bearish-text)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                    {stock.changePercent >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
                <div style={{ height: '32px' }}>
                  <MiniChart data={stock.sparkline} positive={stock.changePercent >= 0} height={32} />
                </div>
                <button onClick={() => toggleWatchlist(stock.ticker)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: 'var(--color-bearish-dim)', border: '1px solid rgba(239,68,68,0.2)', color: 'var(--color-bearish-text)', cursor: 'pointer' }}>
                  <Trash2 size={12} />
                </button>
              </div>
            ))
          )}
        </div>
      </Card>

      <Card padding="none">
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Add to Watchlist</span>
        </div>
        <div>
          {otherStocks.map((stock) => (
            <div key={stock.ticker} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 32px', alignItems: 'center', gap: '12px', padding: '10px 16px', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>{stock.ticker}</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{stock.name}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>${stock.price.toFixed(2)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-mono)', color: stock.changePercent >= 0 ? 'var(--color-bullish-text)' : 'var(--color-bearish-text)' }}>
                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </div>
              </div>
              <button onClick={() => toggleWatchlist(stock.ticker)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: 'var(--color-accent-blue-dim)', border: '1px solid rgba(59,130,246,0.2)', color: 'var(--color-accent-blue-bright)', cursor: 'pointer' }}>
                <Plus size={12} />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
