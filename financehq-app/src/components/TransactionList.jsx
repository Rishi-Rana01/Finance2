import { useContext } from 'react'
import { DataContext } from '../contexts'

export default function TransactionList() {
  const { transactions } = useContext(DataContext)

  return (
    <div style={{ background: 'var(--surface-container)', padding: 32, borderRadius: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--on-surface)' }}>Recent Transactions</h3>
        <button style={{
          color: 'var(--primary)', fontSize: 13, fontWeight: 700,
          background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
        }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          View All
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {transactions.map(tx => (
          <div
            key={tx.id}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: 16, borderRadius: 16, transition: 'background 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-container-high)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 48, height: 48, background: 'var(--surface-variant)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 12, flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ color: tx.iconColor }}>{tx.icon}</span>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--on-surface)' }}>{tx.name}</p>
                <p style={{ fontSize: 11, color: 'var(--on-surface-variant)' }}>
                  {tx.category} • {tx.date}
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: tx.amountColor }}>{tx.amount}</p>
              <p style={{
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: tx.statusColor,
              }}>
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
