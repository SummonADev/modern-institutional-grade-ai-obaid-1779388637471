import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MiniChart } from '@/components/ui/MiniChart';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { STOCKS } from '@/lib/mockData';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function WatchlistPage() {
  const [watchlist, setWatchlist] = useLocalStorage<string[]>('watchlist', STOCKS.slice(0, 4).map(s => s.ticker));
  const [search, setSearch] = useState('');

  const watchedStocks = STOCKS.filter(s => watchlist.includes(s.ticker));
  const searchResults = search.length > 1
    ? STOCKS.filter(s => s.ticker.toLowerCase().includes(search.toLowerCase()) || s.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5)
    : [];

  const toggle = (ticker: string) => {
    setWatchlist(prev => prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Watchlists</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Track your favorite stocks</p>
      </div>

      <div style={{ position: 'relative', maxWidth: '400px' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Add symbol to watchlist..."
          style={{ width: '100%', padding: '9px 14px', background: '#131c2e', border: '1px solid #1e2d45', borderRadius: '8px', color: '#e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
        {searchResults.length > 0 && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#131c2e', border: '1px solid #1e2d45', borderRadius: '8px', marginTop: '4px', zIndex: 10, overflow: 'hidden' }}>
            {searchResults.map(s => (
              <button key={s.ticker} onClick={() => { toggle(s.ticker); setSearch(''); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px 14px', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(30,45,69,0.5)', color: '#e2e8f0', fontSize: '13px', cursor: 'pointer', textAlign: 'left' }}>
                <span><strong>{s.ticker}</strong> — {s.name}</span>
                <span style={{ color: watchlist.includes(s.ticker) ? '#ef4444' : '#22c55e', fontSize: '12px' }}>{watchlist.includes(s.ticker) ? 'Remove' : 'Add'}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
        {watchedStocks.map(stock => (
          <Card key={stock.ticker} padding="md">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ fontWeight: 700, color: '#e2e8f0' }}>{stock.ticker}</span>
                  <Badge variant={stock.signal === 'BUY' ? 'bullish' : stock.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">{stock.signal}</Badge>
                </div>
                <div style={{ fontSize: '11px', color: '#8b9ab0' }}>{stock.name}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ScoreRing score={stock.aiScore} size={44} />
                <button onClick={() => toggle(stock.ticker)}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '16px', padding: '2px' }} title="Remove">×</button>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#e2e8f0' }}>${stock.price.toFixed(2)}</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: stock.changePercent >= 0 ? '#22c55e' : '#ef4444' }}>
                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </span>
            </div>
            <MiniChart data={stock.sparkline} positive={stock.changePercent >= 0} height={32} />
          </Card>
        ))}
        {watchedStocks.length === 0 && (
          <div style={{ color: '#8b9ab0', fontSize: '13px', padding: '40px 0', textAlign: 'center', gridColumn: '1/-1' }}>No stocks in watchlist. Search above to add some.</div>
        )}
      </div>
    </div>
  );
}
