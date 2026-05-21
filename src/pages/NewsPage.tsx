import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { NEWS } from '@/lib/mockData';

export function NewsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>News & Catalysts</h1>
        <p style={{ fontSize: '13px', color: '#8b9ab0' }}>AI-curated market news and event catalysts</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {NEWS.map(article => (
          <Card key={article.id} hover padding="md">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  {article.tickers?.map(t => (
                    <Badge key={t} variant="blue" size="sm">{t}</Badge>
                  ))}
                  <Badge variant={article.sentiment === 'bullish' ? 'bullish' : article.sentiment === 'bearish' ? 'bearish' : 'neutral'} size="sm">
                    {article.sentiment}
                  </Badge>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px', lineHeight: 1.4 }}>{article.headline}</div>
                <div style={{ fontSize: '12px', color: '#8b9ab0', lineHeight: 1.5, marginBottom: '8px' }}>{article.summary}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>{article.source}</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>{article.timestamp}</span>
                  {article.impact && (
                    <Badge variant={article.impact === 'high' ? 'bearish' : article.impact === 'medium' ? 'neutral' : 'default'} size="sm">
                      {article.impact} impact
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
