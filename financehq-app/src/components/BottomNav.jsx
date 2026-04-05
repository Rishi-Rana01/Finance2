export default function BottomNav({ activePage, setActivePage }) {
  const items = [
    { id: 'dashboard', label: 'Dash', icon: 'dashboard' },
    { id: 'budget', label: 'Budget', icon: 'query_stats', filled: true },
    { id: 'wallet', label: 'Wallet', icon: 'account_balance_wallet' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ]

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 50,
      background: 'rgba(8,19,41,0.9)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(56,71,109,0.15)',
      borderRadius: '24px 24px 0 0',
      boxShadow: '0 -4px 40px rgba(144,147,255,0.04)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        height: 72, padding: '0 16px 8px',
      }}>
        {items.map(item => {
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 2,
                color: isActive ? 'var(--primary)' : 'var(--on-surface-variant)',
                background: isActive ? 'rgba(144,147,255,0.10)' : 'transparent',
                border: 'none', borderRadius: 12, padding: '4px 12px',
                cursor: 'pointer', transition: 'all 0.3s ease',
                opacity: isActive ? 1 : 0.7,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontVariationSettings: isActive && item.filled
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {item.icon}
              </span>
              <span style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
