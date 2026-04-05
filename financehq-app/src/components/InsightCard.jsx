export default function InsightCard({ title, icon, color, text }) {
  return (
    <div className="glass-panel" style={{
      padding: 24, borderRadius: 12,
      border: '1px solid rgba(255,255,255,0.05)',
      background: 'var(--surface-container-low)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span className="material-symbols-outlined" style={{ color }}>{icon}</span>
        <h5 style={{ fontWeight: 700, fontSize: 13, color }}>{title}</h5>
      </div>
      <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>{text}</p>
    </div>
  )
}
