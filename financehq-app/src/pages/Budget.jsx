import { useState, useContext } from 'react'
import { RoleContext, DataContext } from '../contexts'
import BudgetDistributionChart from '../components/BudgetDistributionChart'
import CategoryCard from '../components/CategoryCard'
import InsightCard from '../components/InsightCard'

const insights = [
  {
    title: 'Smart Suggestion',
    icon: 'auto_awesome',
    color: 'var(--tertiary)',
    text: (
      <>
        You've saved <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>$120</span> in Groceries this week.
        Consider reallocating it to your <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Rainy Day fund</span>.
      </>
    ),
  },
  {
    title: 'Savings Goal',
    icon: 'trending_up',
    color: 'var(--secondary)',
    text: (
      <>
        You're 84% of the way to your <span style={{ color: 'var(--on-surface)', fontWeight: 700 }}>New Laptop</span> goal.
        Only $350 more to go!
      </>
    ),
  },
  {
    title: 'Alert',
    icon: 'warning',
    color: 'var(--error)',
    text: (
      <>
        Dining spending is <span style={{ color: 'var(--error)', fontWeight: 700 }}>24% higher</span> than your average for
        this time of the month.
      </>
    ),
  },
]

export default function Budget() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newCatName, setNewCatName] = useState('')
  const [newCatBudget, setNewCatBudget] = useState('')
  
  const { role } = useContext(RoleContext)
  const { categories, setCategories } = useContext(DataContext)
  const isReadOnly = role !== 'admin'

  return (
    <div style={{ paddingTop: 80, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, maxWidth: 1280, margin: '0 auto' }}>
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        alignItems: 'flex-end', gap: 24, marginTop: 16, marginBottom: 32,
      }}>
        <div>
          <span style={{
            fontSize: '0.6875rem', fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.05em', color: 'var(--on-surface-variant)',
          }}>
            Monthly Budget
          </span>
          <h1 className="text-glow" style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 800,
            letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--on-surface)', marginTop: 8,
          }}>
            $12,450.00
          </h1>
          <div style={{ display: 'flex', gap: 32, marginTop: 24, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
                Total Budgeted
              </p>
              <p style={{ fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>$15,000</p>
            </div>
            <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />
            <div>
              <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
                Total Spent
              </p>
              <p style={{ fontSize: 20, fontWeight: 600, color: 'var(--secondary)' }}>$2,550</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            className="btn-primary neon-glow-primary btn-breathing" 
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '16px 24px', borderRadius: 6, fontSize: 15,
              display: 'flex', alignItems: 'center', gap: 8,
              opacity: isReadOnly ? 0.4 : 1,
              cursor: isReadOnly ? 'not-allowed' : 'pointer'
            }}
            disabled={isReadOnly}
            title={isReadOnly ? "Admins only" : "Add New Category"}
          >
            <span className="material-symbols-outlined">add_circle</span>
            Add New Category
          </button>
        </div>
      </section>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24, marginBottom: 32,
      }}>
        <BudgetDistributionChart />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {categories.map(cat => <CategoryCard key={cat.id} {...cat} />)}
        </div>
      </div>

      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 24,
      }}>
        {insights.map(ins => <InsightCard key={ins.title} {...ins} />)}
      </section>

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
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Add Category</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Category Name</label>
                <input 
                  type="text"
                  value={newCatName}
                  onChange={e => setNewCatName(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="e.g. Travel"
                />
              </div>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Monthly Budget ($)</label>
                <input 
                  type="number"
                  value={newCatBudget}
                  onChange={e => setNewCatBudget(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="e.g. 500"
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
                  if(!newCatName || !newCatBudget) return;
                  const newCategory = {
                    id: Date.now().toString(),
                    label: newCatName,
                    sub: 'Custom Category',
                    icon: 'category',
                    iconColor: 'var(--tertiary)',
                    spent: 0,
                    budget: parseFloat(newCatBudget),
                    barColor: 'var(--tertiary)',
                    glowColor: 'rgba(221,183,255,0.4)',
                  };
                  setCategories([...categories, newCategory]);
                  setNewCatName('');
                  setNewCatBudget('');
                  setIsModalOpen(false);
                }}
                style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
