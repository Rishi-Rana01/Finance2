const segments = [
  { label: 'Housing', color: '#9093ff', pct: 60, dashOffset: 100.5 },
  { label: 'Dining', color: '#4edea3', pct: 20, dashOffset: 201 },
  { label: 'Tech & Travel', color: '#ddb7ff', pct: 20, dashOffset: 230 },
]

export default function SpendingDonut() {
  return (
    <div style={{
      background: 'var(--surface-container)', padding: 32, borderRadius: 24,
    }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: 'var(--on-surface)' }}>
        Spending Breakdown
      </h3>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
        <svg
          style={{ width: 192, height: 192, transform: 'rotate(-90deg)' }}
          viewBox="0 0 100 100"
        >
          {/* Background track */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#142449" strokeWidth="12" />
          {/* Housing 60% */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#9093ff"
            strokeDasharray="251.2" strokeDashoffset="100.5"
            strokeLinecap="round" strokeWidth="12" />
          {/* Dining 20% */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#4edea3"
            strokeDasharray="251.2" strokeDashoffset="201"
            strokeLinecap="round" strokeWidth="12" />
          {/* Tech 10% */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#ddb7ff"
            strokeDasharray="251.2" strokeDashoffset="230"
            strokeLinecap="round" strokeWidth="12" />
        </svg>
        {/* Center label */}
        <div style={{
          position: 'absolute', display: 'flex', flexDirection: 'column',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--on-surface)' }}>$3.2k</span>
          <span style={{ fontSize: 10, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Total
          </span>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
        {segments.map(seg => (
          <div key={seg.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: seg.color }} />
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--on-surface)' }}>{seg.label}</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)' }}>{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
