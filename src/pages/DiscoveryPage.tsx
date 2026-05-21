import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MiniChart } from '@/components/ui/MiniChart';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { STOCKS } from '@/lib/mockData';

const SECTORS = ['All', 'Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer', 'Industrial'];

export function DiscoveryPage() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState<'aiScore' | 'changePercent' | 'momentum'>('aiScore');

  const filtered = STOCKS
    .filter(s => selectedSector === 'All' || s.sector === selectedSector)
    .sort((a, b) => b[sortBy] - a[sortBy])
    .slice(0, 12);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Discovery</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>Discover new investment opportunities powered by AI</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {SECTORS.map(s => (
            <button key={s} onClick={() => setSelectedSector(s)}
              style={{ padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', border: '1px solid', transition: 'all 0.15s',
                background: selectedSector === s ? 'rgba(59,130,246,0.1)' : 'transparent',
                borderColor: selectedSector === s ? 'rgba(59,130,246,0.4)' : '#1e2d45',
                color: selectedSector === s ? '#93c5fd' : '#8b9ab0' }}>
              {s}
            </button>
          ))}
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)}
          style={{ marginLeft: 'auto', padding: '5px 10px', background: '#131c2e', border: '1px solid #1e2d45', borderRadius: '6px', color: '#c9d4e0', fontSize: '12px', cursor: 'pointer' }}>
          <option value="aiScore">Sort: AI Score</option>
          <option value="changePercent">Sort: Change %</option>
          <option value="momentum">Sort: Momentum</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
        {filtered.map(stock => (
          <Card key={stock.ticker} hover padding="md">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '14px', marginBottom: '2px' }}>{stock.ticker}</div>
                <div style={{ fontSize: '10px', color: '#8b9ab0', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stock.name}</div>
              </div>
              <ScoreRing score={stock.aiScore} size={44} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'monospace', color: '#e2e8f0', fontWeight: 600 }}>${stock.price.toFixed(2)}</span>
              <Badge variant={stock.signal === 'BUY' ? 'bullish' : stock.signal === 'SELL' ? 'bearish' : 'neutral'} size="sm">{stock.signal}</Badge>
            </div>
            <MiniChart data={stock.sparkline} positive={stock.changePercent >= 0} height={32} />
            <div style={{ marginTop: '8px', fontSize: '10px', color: '#64748b' }}>{stock.sector}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
