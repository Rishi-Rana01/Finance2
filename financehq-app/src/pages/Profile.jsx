import { useContext } from 'react'
import { RoleContext } from '../contexts'

export default function Profile() {
  const { role } = useContext(RoleContext)

  return (
    <div style={{ paddingTop: 96, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, maxWidth: 800, margin: '0 auto' }}>
      <section style={{ marginBottom: 48, display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{
          width: 96, height: 96, borderRadius: '50%', overflow: 'hidden',
          border: '2px solid var(--primary)',
          boxShadow: '0 0 20px rgba(144,147,255,0.2)'
        }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0RIWZ6ouXj_KSuct7UrBzsU1qwDpj2akINmmBk6xFCB0zIzfhb4zydg5W2ovdJVU-o50kXbg5-Xi4YldCV9kBPf_Pl0qTCOrKKbdEx5zJ0puqLj_WNtLUmyYMn3RBsDzINYoZgw6mBsRURdy_Bm0dLOdmmXtSj503jQJBiYnFrYN2m5kMmtLLqzr_tlgpKYKU4rA9EItgIj1uLZU9C9yHi9iK7N9TyIM6OVgGx0sMppv40yPt7J2lfosHkglKA8ULR11H1cAn2ds"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Zorvyn HR
          </h1>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: 16 }}>
            Member since Oct 2023 • Role: <span style={{ color: role === 'admin' ? 'var(--primary)' : 'var(--on-surface)', fontWeight: 600 }}>{role.toUpperCase()}</span>
          </p>
        </div>
      </section>

      <div style={{ display: 'grid', gap: 24 }}>

        <div className="glass-panel" style={{ padding: 32, borderRadius: 24 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            Account Settings
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Email Address</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: 13 }}>hr@zorvyn.io</div>
              </div>
              <button className="btn-glass" style={{ padding: '6px 16px', borderRadius: 8, fontSize: 12 }}>Edit</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Password</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: 13 }}>Last changed 3 months ago</div>
              </div>
              <button className="btn-glass" style={{ padding: '6px 16px', borderRadius: 8, fontSize: 12 }}>Change</button>
            </div>
          </div>
        </div>


        <div className="glass-panel" style={{ padding: 32, borderRadius: 24 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            Preferences
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Push Notifications</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: 13 }}>Receive alerts on spending limits</div>
              </div>
              <div style={{ width: 48, height: 24, background: 'var(--primary)', borderRadius: 12, padding: 2, display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
                <div style={{ width: 20, height: 20, background: 'white', borderRadius: '50%' }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Weekly Reports</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: 13 }}>Email digest of your activity</div>
              </div>
              <div style={{ width: 48, height: 24, background: 'var(--surface-variant)', borderRadius: 12, padding: 2, display: 'flex', cursor: 'pointer' }}>
                <div style={{ width: 20, height: 20, background: 'white', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
