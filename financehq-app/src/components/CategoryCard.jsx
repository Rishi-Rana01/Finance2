import { useState, useContext } from 'react'
import { RoleContext } from '../contexts'

export default function CategoryCard({
  label, sub, icon, iconColor, spent, budget, barColor, glowColor,
}) {
  const [hovered, setHovered] = useState(false)
  const { role } = useContext(RoleContext)
  const isReadOnly = role !== 'admin'
  const pct = Math.min((spent / budget) * 100, 100)
  const remaining = budget - spent
  const isOver = spent > budget

  return (
    <div
      style={{
        background: hovered ? 'var(--surface-container-high)' : 'var(--surface-container)',
        borderRadius: 12, padding: 24, transition: 'background 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: `${iconColor}1a`, /* 10% opacity */
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ color: iconColor }}>{icon}</span>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--on-surface)', fontSize: 15 }}>{label}</h4>
            <p style={{ fontSize: 11, color: 'var(--on-surface-variant)', marginTop: 2 }}>{sub}</p>
          </div>
        </div>
        <button
          style={{
            color: 'var(--on-surface-variant)', background: 'rgba(20,36,73,0.2)',
            border: 'none', borderRadius: 8, padding: 8, cursor: isReadOnly ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s', opacity: isReadOnly ? 0.3 : 1,
          }}
          disabled={isReadOnly}
          title={isReadOnly ? "Admins only" : "Edit"}
          onMouseEnter={e => { if (!isReadOnly) e.currentTarget.style.color = 'var(--primary)' }}
          onMouseLeave={e => { if (!isReadOnly) e.currentTarget.style.color = 'var(--on-surface-variant)' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>edit</span>
        </button>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 500 }}>
          <span style={{ color: 'var(--on-surface-variant)' }}>
            ${spent.toLocaleString()} / ${budget.toLocaleString()}
          </span>
          <span style={{ color: isOver ? 'var(--error)' : 'var(--secondary)' }}>
            {isOver
              ? `-$${Math.abs(remaining).toLocaleString()} Over`
              : `$${remaining.toLocaleString()} Left`}
          </span>
        </div>
        <div style={{
          height: 6, width: '100%', background: 'var(--surface-variant)',
          borderRadius: 99, overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', width: `${pct}%`, background: barColor,
            borderRadius: 99,
            boxShadow: `0 0 8px ${glowColor}`,
            transition: 'width 0.5s ease',
          }} />
        </div>
      </div>
    </div>
  )
}
