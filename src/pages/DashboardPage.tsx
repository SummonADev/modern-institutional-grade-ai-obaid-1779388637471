import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { MiniChart } from '@/components/ui/MiniChart';
import { MetricBar } from '@/components/ui/MetricBar';
import { STOCKS, MARKET_INDICES } from '@/lib/mockData';

export function DashboardPage() {
  const topStocks = STOCKS.slice(0, 6);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Dashboard</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Market overview and AI-powered insights</p>
      </div>

      {/* Market Indices */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        {MARKET_INDICES.slice(0, 4).map(idx => (
          <Card key={idx.symbol} padding="sm">
            <div style={{ fontSize: '11px', color: '#8b9ab0', marginBottom: '4px', fontWeight: 600, letterSpacing: '0.3px' }}>{idx.name}</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#e2e8f0', fontFamily: 'monospace' }}>
              {typeof idx.price === 'number' && idx.price > 1000 ? idx.price.toLocaleString() : idx.price}
            </div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: idx.changePercent >= 0 ? '#22c55e' : '#ef4444' }}>
              {idx.changePercent >= 0 ? '+' : ''}{idx.changePercent.toFixed(2)}%
            </div>
          </Card>
        ))}
      </div>

      {/* Top Stocks */}
      <div>
        <h2 style={{ fontSize: '14px', fontWeight: 600, color: '#c9d4e0', marginBottom: '12px' }}>Top Picks</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {topStocks.map(stock => (
            <Card key={stock.ticker} hover padding="md">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>{stock.ticker}</span>
                    <Badge variant={stock.signal === 'BUY' ? 'bullish' : stock.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">
                      {stock.signal}
                    </Badge>
                  </div>
                  <div style={{ fontSize: '11px', color: '#8b9ab0', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stock.name}</div>
                </div>
                <ScoreRing score={stock.aiScore} size={52} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#e2e8f0', fontFamily: 'monospace' }}>${stock.price.toFixed(2)}</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: stock.changePercent >= 0 ? '#22c55e' : '#ef4444' }}>
                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </span>
              </div>
              <MiniChart data={stock.sparkline} positive={stock.changePercent >= 0} height={36} />
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <MetricBar label="Momentum" value={stock.momentum} />
                <MetricBar label="Volume" value={stock.volumeScore} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
