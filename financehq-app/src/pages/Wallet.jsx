import { useState, useContext } from 'react'
import { RoleContext, DataContext } from '../contexts'

export default function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newCardName, setNewCardName] = useState('')
  const [newCardNumber, setNewCardNumber] = useState('')

  const { role } = useContext(RoleContext)
  const { cards, setCards } = useContext(DataContext)
  const isReadOnly = role !== 'admin'

  return (
    <div style={{ paddingTop: 96, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, maxWidth: 1280, margin: '0 auto' }}>
      <section style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--on-surface-variant)', textTransform: 'uppercase', marginBottom: 8 }}>
            Digital Wallet
          </h2>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--on-surface)', marginBottom: 16 }}>
            Cards & Accounts
          </h1>
        </div>
        <div>
          <button 
            className="btn-primary" 
            onClick={() => setIsModalOpen(true)}
            style={{ 
              padding: '12px 24px', borderRadius: 12, 
              opacity: isReadOnly ? 0.5 : 1,
              cursor: isReadOnly ? 'not-allowed' : 'pointer'
            }}
            disabled={isReadOnly}
            title={isReadOnly ? "Admins only" : "Add Card"}
          >
            + Add Card
          </button>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {cards.map(card => {
          if (card.type === 'card') {
            return (
              <div key={card.id} className="glass-card" style={{ 
                padding: 24, borderRadius: 24, 
                background: 'linear-gradient(135deg, rgba(8,0,121,0.6), rgba(20,36,73,0.6))',
                boxShadow: '0 8px 32px rgba(144,147,255,0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                  <span style={{ fontWeight: 600, color: 'var(--on-surface)' }}>{card.name}</span>
                  <span className="material-symbols-outlined" style={{color: 'var(--primary)'}}>contactless</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '0.1em', marginBottom: 24, color: 'var(--on-surface-variant)' }}>
                  {card.number}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--on-surface-variant)', fontWeight: 600 }}>Cardholder</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--on-surface)' }}>{card.holder || 'Zorvyn'}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--on-surface-variant)', fontWeight: 600 }}>Expires</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--on-surface)' }}>{card.expires || '12/28'}</div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div key={card.id} className="glass-card" style={{ padding: 24, borderRadius: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{color: 'var(--primary)'}}>account_balance</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 600 }}>{card.name}</h3>
                      <div style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{card.number}</div>
                    </div>
                  </div>
                  <button 
                      style={{ 
                        background: 'transparent', border: 'none', color: 'var(--on-surface-variant)',
                        cursor: isReadOnly ? 'not-allowed' : 'pointer', opacity: isReadOnly ? 0.3 : 1
                      }}
                      disabled={isReadOnly}
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 16 }}>{card.balance || '$0.00'}</div>
                <div style={{ fontSize: 12, color: 'var(--secondary)' }}>{card.status || 'Active'}</div>
              </div>
            )
          }
        })}
      </section>

      {/* Add Card Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(5,9,20,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}>
          <div className="glass-panel" style={{
            width: '90%', maxWidth: 400, padding: 32, borderRadius: 24,
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Add Card</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Card Vendor</label>
                <input 
                  type="text"
                  value={newCardName}
                  onChange={e => setNewCardName(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(56,71,109,0.3)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="e.g. Chase Sapphire"
                />
              </div>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Card Number</label>
                <input 
                  type="text"
                  value={newCardNumber}
                  onChange={e => setNewCardNumber(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(56,71,109,0.3)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="**** **** **** 1234"
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button 
                className="btn-glass"
                onClick={() => setIsModalOpen(false)}
                style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}
              >
                Cancel
              </button>
              <button 
                className="btn-primary"
                onClick={() => {
                  if(!newCardName || !newCardNumber) return;
                  const newCard = {
                    id: Date.now(),
                    type: 'card',
                    name: newCardName,
                    number: newCardNumber,
                    holder: 'Zorvyn',
                    expires: '12/28'
                  };
                  setCards([...cards, newCard]);
                  setNewCardName('');
                  setNewCardNumber('');
                  setIsModalOpen(false);
                }}
                style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
