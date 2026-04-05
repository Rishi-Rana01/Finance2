const distribution = [
  { label: 'Essential', color: 'var(--primary)', pct: 65 },
  { label: 'Savings', color: 'var(--secondary)', pct: 20 },
  { label: 'Leisure', color: 'var(--tertiary)', pct: 15 },
]

export default function BudgetDistributionChart() {
  return (
    <div className="glass-panel" style={{
      background: 'var(--surface-container-low)',
      borderRadius: 12, padding: 32, position: 'relative', overflow: 'hidden',
    }}>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 32, color: 'var(--on-surface)' }}>
        Budget Distribution
      </h3>

      {/* SVG Ring */}
      <div style={{ position: 'relative', width: 192, height: 192, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle cx="96" cy="96" r="80" fill="transparent"
            stroke="rgba(20,36,73,0.3)" strokeWidth="16" />
          {/* Essential 65% */}
          <circle cx="96" cy="96" r="80" fill="transparent"
            stroke="#9093ff" strokeDasharray="502" strokeDashoffset="120"
            strokeWidth="16" className="neon-line" />
          {/* Savings 20% */}
          <circle cx="96" cy="96" r="80" fill="transparent"
            stroke="#4edea3" strokeDasharray="502" strokeDashoffset="400"
            strokeWidth="16" className="neon-line" />
          {/* Leisure 15% */}
          <circle cx="96" cy="96" r="80" fill="transparent"
            stroke="#ddb7ff" strokeDasharray="502" strokeDashoffset="460"
            strokeWidth="16" className="neon-line" />
        </svg>
        {/* Center text */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--on-surface)' }}>83%</span>
          <span style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
            Efficiency
          </span>
        </div>
      </div>

      {/* Legend */}
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {distribution.map(d => (
          <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }} />
              <span style={{ color: 'var(--on-surface-variant)' }}>{d.label}</span>
            </div>
            <span style={{ fontFamily: 'monospace', color: 'var(--on-surface)' }}>{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
