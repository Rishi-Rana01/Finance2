export default function SummaryCard({ label, value, change, changeType, changeLabel, icon, iconColor, shadowClass }) {
  return (
    <div
      className={`glass-card ${shadowClass}`}
      style={{
        padding: 32, borderRadius: 16, position: 'relative', overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Background icon */}
      <div style={{
        position: 'absolute', top: 0, right: 0, padding: 24,
        opacity: 0.2, transition: 'opacity 0.3s',
        fontSize: 48,
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.4}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.2}
      >
        <span className="material-symbols-outlined" style={{ color: iconColor, fontSize: 48 }}>{icon}</span>
      </div>

      <p style={{
        fontSize: 12, fontWeight: 500, textTransform: 'uppercase',
        letterSpacing: '0.08em', color: 'var(--on-surface-variant)',
      }}>
        {label}
      </p>
      <h2 style={{
        fontSize: 28, fontWeight: 700, marginTop: 8, color: 'var(--on-surface)',
        letterSpacing: '-0.02em',
      }}>
        {value}
      </h2>
      <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          className={changeType === 'positive' ? 'chip-positive' : 'chip-negative'}
        >
          {change}
        </span>
        <span style={{ fontSize: 11, color: 'var(--on-surface-variant)' }}>
          {changeLabel}
        </span>
      </div>
    </div>
  )
}
