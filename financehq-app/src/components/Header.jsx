import { useContext } from 'react'
import { RoleContext } from '../contexts'

export default function Header({ activePage, setActivePage }) {
  const { role, setRole } = useContext(RoleContext)

  const navLinks = [
    { id: 'dashboard', label: 'Dash' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'profile', label: 'Profile' },
  ]

  const toggleRole = () => {
    setRole(prev => prev === 'admin' ? 'user' : 'admin')
  }

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      background: 'rgba(6,14,32,0.80)',
      backdropFilter: 'blur(32px)',
      WebkitBackdropFilter: 'blur(32px)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 24px', height: 64, maxWidth: 1536, margin: '0 auto',
      }}>
        {/* Logo + Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{
            fontSize: 20, fontWeight: 800,
            background: 'linear-gradient(90deg, #9093ff, #7073ff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            FinanceBoard
          </span>
          <nav style={{ display: 'flex', gap: 8 }} className="desktop-nav">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                style={{
                  fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em',
                  color: activePage === link.id ? 'var(--on-surface)' : 'var(--on-surface-variant)',
                  background: activePage === link.id ? 'transparent' : 'transparent',
                  border: 'none',
                  padding: '4px 12px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={e => {
                  if (activePage !== link.id) e.currentTarget.style.background = 'rgba(20,36,73,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* RBAC Toggle (Demo) */}
          <button 
            onClick={toggleRole}
            style={{
              padding: '4px 12px', color: 'var(--on-surface-variant)', background: 'var(--surface-variant)',
              border: 'none', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.2s',
              fontSize: 12, fontWeight: 600,
            }}>
             Role: <span style={{color: 'var(--on-surface)'}}>{role.toUpperCase()}</span>
          </button>
          
          <button
            style={{
              padding: 8, color: 'var(--on-surface-variant)', background: 'none',
              border: 'none', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            onClick={() => setActivePage('profile')}
            style={{
            width: 32, height: 32, borderRadius: '50%', overflow: 'hidden',
            border: '1px solid rgba(56,71,109,0.3)', cursor: 'pointer'
          }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0RIWZ6ouXj_KSuct7UrBzsU1qwDpj2akINmmBk6xFCB0zIzfhb4zydg5W2ovdJVU-o50kXbg5-Xi4YldCV9kBPf_Pl0qTCOrKKbdEx5zJ0puqLj_WNtLUmyYMn3RBsDzINYoZgw6mBsRURdy_Bm0dLOdmmXtSj503jQJBiYnFrYN2m5kMmtLLqzr_tlgpKYKU4rA9EItgIj1uLZU9C9yHi9iK7N9TyIM6OVgGx0sMppv40yPt7J2lfosHkglKA8ULR11H1cAn2ds"
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
