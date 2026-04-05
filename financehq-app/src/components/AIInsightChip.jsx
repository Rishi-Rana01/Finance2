export default function AIInsightChip() {
  return (
    <div style={{
      position: 'fixed', bottom: 100, right: 24,
    }}>
      <div className="glass-card animate-pulse" style={{
        padding: '8px 16px', borderRadius: 99,
        border: '1px solid rgba(221,183,255,0.20)',
        display: 'flex', alignItems: 'center', gap: 12,
        cursor: 'pointer',
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%', background: 'var(--tertiary)',
        }} />
        <span style={{
          fontSize: 11, fontWeight: 700, color: 'var(--tertiary)',
          textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          AI Insight: Spending optimized by 12% this week
        </span>
      </div>
    </div>
  )
}
