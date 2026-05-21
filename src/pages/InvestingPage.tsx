import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { MetricBar } from '@/components/ui/MetricBar';
import { STOCKS } from '@/lib/mockData';

export function InvestingPage() {
  const investStocks = STOCKS.filter(s => s.signal === 'BUY' || s.signal === 'HOLD').slice(0, 8);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Long-Term Investing</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Fundamental analysis and long-term growth opportunities</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {investStocks.map(stock => (
          <Card key={stock.ticker} hover padding="md">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>{stock.ticker}</span>
                  <Badge variant={stock.signal === 'BUY' ? 'bullish' : 'neutral'} size="sm">{stock.signal}</Badge>
                </div>
                <div style={{ fontSize: '11px', color: '#8b9ab0' }}>{stock.name}</div>
                <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{stock.sector}</div>
              </div>
              <ScoreRing score={stock.aiScore} size={56} />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#e2e8f0', fontFamily: 'monospace', marginBottom: '4px' }}>${stock.price.toFixed(2)}</div>
            <div style={{ fontSize: '12px', color: stock.changePercent >= 0 ? '#22c55e' : '#ef4444', fontWeight: 600, marginBottom: '14px' }}>
              {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}% today
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <MetricBar label="Fundamentals" value={stock.fundamentals} />
              <MetricBar label="Momentum" value={stock.momentum} />
              <MetricBar label="AI Score" value={stock.aiScore} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
