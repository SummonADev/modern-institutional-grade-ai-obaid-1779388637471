import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MiniChart } from '@/components/ui/MiniChart';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { STOCKS } from '@/lib/mockData';

export function DayTradingPage() {
  const dayTradeStocks = STOCKS.filter(s => s.volatility > 60).slice(0, 8);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Day Trading</h1>
          <p style={{ fontSize: '13px', color: '#8b9ab0' }}>High-volatility opportunities for intraday trading</p>
        </div>
        <Badge variant="bullish" dot>LIVE</Badge>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1e2d45' }}>
              {['Symbol', 'Price', 'Change', 'AI Score', 'Signal', 'Momentum', 'Volume Score', 'Chart'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', color: '#8b9ab0', fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dayTradeStocks.map(stock => (
              <tr key={stock.ticker} style={{ borderBottom: '1px solid rgba(30,45,69,0.5)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                <td style={{ padding: '10px 12px' }}>
                  <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '13px' }}>{stock.ticker}</div>
                  <div style={{ fontSize: '10px', color: '#8b9ab0' }}>{stock.sector}</div>
                </td>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#e2e8f0', fontWeight: 600 }}>${stock.price.toFixed(2)}</td>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontWeight: 600, color: stock.changePercent >= 0 ? '#22c55e' : '#ef4444' }}>
                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </td>
                <td style={{ padding: '10px 12px' }}><ScoreRing score={stock.aiScore} size={40} /></td>
                <td style={{ padding: '10px 12px' }}>
                  <Badge variant={stock.signal === 'BUY' ? 'bullish' : stock.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">{stock.signal}</Badge>
                </td>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: '12px', color: '#c9d4e0' }}>{stock.momentum}</td>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: '12px', color: '#c9d4e0' }}>{stock.volumeScore}</td>
                <td style={{ padding: '10px 12px', width: '80px' }}><MiniChart data={stock.sparkline} positive={stock.changePercent >= 0} height={32} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
