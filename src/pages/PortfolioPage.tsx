import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MiniChart } from '@/components/ui/MiniChart';
import { STOCKS } from '@/lib/mockData';

const MOCK_PORTFOLIO = STOCKS.slice(0, 5).map((s, i) => ({
  ...s,
  shares: [10, 25, 5, 50, 8][i],
  avgCost: s.price * (1 - (Math.random() * 0.2 - 0.1)),
}));

export function PortfolioPage() {
  const [tab, setTab] = useState<'holdings' | 'performance'>('holdings');

  const totalValue = MOCK_PORTFOLIO.reduce((sum, h) => sum + h.price * h.shares, 0);
  const totalCost = MOCK_PORTFOLIO.reduce((sum, h) => sum + h.avgCost * h.shares, 0);
  const totalPnL = totalValue - totalCost;
  const totalPnLPct = (totalPnL / totalCost) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Portfolio</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Track your holdings and performance</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        {[
          { label: 'Total Value', value: `$${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, color: '#e2e8f0' },
          { label: 'Total P&L', value: `${totalPnL >= 0 ? '+' : ''}$${totalPnL.toFixed(2)}`, color: totalPnL >= 0 ? '#22c55e' : '#ef4444' },
          { label: 'Return %', value: `${totalPnLPct >= 0 ? '+' : ''}${totalPnLPct.toFixed(2)}%`, color: totalPnLPct >= 0 ? '#22c55e' : '#ef4444' },
          { label: 'Positions', value: String(MOCK_PORTFOLIO.length), color: '#93c5fd' },
        ].map(stat => (
          <Card key={stat.label} padding="sm">
            <div style={{ fontSize: '11px', color: '#8b9ab0', marginBottom: '4px' }}>{stat.label}</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: stat.color, fontFamily: 'monospace' }}>{stat.value}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #1e2d45', paddingBottom: '0' }}>
        {(['holdings', 'performance'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '8px 16px', background: 'transparent', border: 'none', borderBottom: tab === t ? '2px solid #3b82f6' : '2px solid transparent', color: tab === t ? '#93c5fd' : '#8b9ab0', fontSize: '13px', fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize', marginBottom: '-1px' }}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'holdings' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {MOCK_PORTFOLIO.map(h => {
            const pnl = (h.price - h.avgCost) * h.shares;
            const pnlPct = ((h.price - h.avgCost) / h.avgCost) * 100;
            return (
              <Card key={h.ticker} padding="md">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontWeight: 700, color: '#e2e8f0' }}>{h.ticker}</span>
                      <Badge variant={h.signal === 'BUY' ? 'bullish' : h.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">{h.signal}</Badge>
                    </div>
                    <div style={{ fontSize: '11px', color: '#8b9ab0' }}>{h.shares} shares @ ${h.avgCost.toFixed(2)}</div>
                  </div>
                  <div style={{ width: '80px' }}><MiniChart data={h.sparkline} positive={h.changePercent >= 0} height={30} /></div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'monospace', fontWeight: 700, color: '#e2e8f0', fontSize: '14px' }}>${(h.price * h.shares).toFixed(2)}</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: pnl >= 0 ? '#22c55e' : '#ef4444' }}>
                      {pnl >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {tab === 'performance' && (
        <Card padding="lg">
          <div style={{ color: '#8b9ab0', fontSize: '13px', textAlign: 'center', padding: '40px 0' }}>
            Performance charts coming soon. Connect more data to see detailed analytics.
          </div>
        </Card>
      )}
    </div>
  );
}
