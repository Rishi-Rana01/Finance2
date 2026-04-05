import { useState, useContext } from 'react'
import { RoleContext, DataContext } from '../contexts'
import SummaryCard from '../components/SummaryCard'
import BalanceTrendChart from '../components/BalanceTrendChart'
import SpendingDonut from '../components/SpendingDonut'
import TransactionList from '../components/TransactionList'
import AIInsightChip from '../components/AIInsightChip'

export default function Dashboard() {
  const [activeRange, setActiveRange] = useState('1M')
  const [isTxModalOpen, setIsTxModalOpen] = useState(false)
  const [newTxAmount, setNewTxAmount] = useState('')
  const [newTxMerchant, setNewTxMerchant] = useState('')
  
  const { role } = useContext(RoleContext)
  const { transactions, setTransactions } = useContext(DataContext)
  const isReadOnly = role !== 'admin'
  const ranges = ['1W', '1M', '6M', '1Y']

  const summaryCards = [
    {
      label: 'Total Balance',
      value: '$45,230.12',
      change: '+2.4%',
      changeType: 'positive',
      changeLabel: 'from last month',
      icon: 'account_balance_wallet',
      iconColor: 'var(--primary)',
      shadowClass: 'neon-shadow-primary',
    },
    {
      label: 'Monthly Income',
      value: '$8,420.00',
      change: '+12.5%',
      changeType: 'positive',
      changeLabel: 'surplus trend',
      icon: 'trending_up',
      iconColor: 'var(--secondary)',
      shadowClass: 'neon-shadow-secondary',
    },
    {
      label: 'Monthly Expenses',
      value: '$3,210.50',
      change: '-4.1%',
      changeType: 'negative',
      changeLabel: 'optimized spending',
      icon: 'payments',
      iconColor: 'var(--tertiary)',
      shadowClass: 'neon-shadow-tertiary',
    },
  ]

  // Mock data for exports
  const exportData = () => {
    return [
      { id: 1, merchant: "Apple Store", category: "Technology", amount: -1299.00, date: "2023-10-24", status: "PENDING" },
      { id: 2, merchant: "The Luminary Grill", category: "Dining", amount: -84.50, date: "2023-10-22", status: "COMPLETED" },
      { id: 3, merchant: "Delta Airlines", category: "Travel", amount: -450.00, date: "2023-10-18", status: "COMPLETED" },
      { id: 4, merchant: "Salary Deposit", category: "Income", amount: 8420.00, date: "2023-10-15", status: "COMPLETED" },
    ]
  }

  const handleExportCSV = () => {
    const data = exportData()
    const headers = Object.keys(data[0]).join(',')
    const rows = data.map(obj => Object.values(obj).join(',')).join('\n')
    const csvContent = "data:text/csv;charset=utf-8," + headers + '\n' + rows
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "transactions.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExportJSON = () => {
    const data = exportData()
    const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2))
    const link = document.createElement("a")
    link.setAttribute("href", jsonContent)
    link.setAttribute("download", "transactions.json")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={{ paddingTop: 96, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, maxWidth: 1536, margin: '0 auto' }}>
      {/* Page header */}
      <section style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        alignItems: 'flex-end', gap: 16, marginBottom: 32,
      }}>
        <div>
          <span style={{
            fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--on-surface-variant)',
          }}>
            Financial Control Center
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            letterSpacing: '-0.03em', marginTop: 4, color: 'var(--on-surface)',
          }}>
            Overview
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn-glass" onClick={handleExportCSV} style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}>
            Export CSV
          </button>
          <button className="btn-glass" onClick={handleExportJSON} style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}>
            Export JSON
          </button>
          <button 
            className="btn-primary" 
            onClick={() => setIsTxModalOpen(true)}
            style={{ 
              padding: '10px 20px', borderRadius: 12, fontSize: 14,
              opacity: isReadOnly ? 0.5 : 1,
              cursor: isReadOnly ? 'not-allowed' : 'pointer',
            }}
            disabled={isReadOnly}
            title={isReadOnly ? "Admins only" : ""}
          >
            Add Transaction
          </button>
        </div>
      </section>

      {/* Summary Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 32 }}>
        {summaryCards.map(card => (
          <SummaryCard key={card.label} {...card} />
        ))}
      </section>

      {/* Balance Trend Chart */}
      <section style={{
        background: 'var(--surface-container-low)',
        padding: 32, borderRadius: 24, marginBottom: 32,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 32, gap: 16,
        }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--on-surface)' }}>Balance Trend</h2>
            <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginTop: 4 }}>
              Growth projection for the last 30 days
            </p>
          </div>
          <div style={{
            display: 'flex', background: 'var(--surface-container)',
            padding: 4, borderRadius: 12,
          }}>
            {ranges.map(r => (
              <button
                key={r}
                onClick={() => setActiveRange(r)}
                style={{
                  padding: '6px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                  border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  background: activeRange === r ? 'rgba(144,147,255,0.1)' : 'transparent',
                  color: activeRange === r ? 'var(--primary)' : 'var(--on-surface-variant)',
                  transition: 'all 0.2s',
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <BalanceTrendChart activeRange={activeRange} />
      </section>

      {/* Bottom Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
      }}>
        <SpendingDonut />
        <TransactionList />
      </section>

      {/* AI Insight Floating Chip */}
      <AIInsightChip />

      {/* Add Transaction Modal */}
      {isTxModalOpen && (
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
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Add Transaction</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Merchant</label>
                <input 
                  type="text"
                  value={newTxMerchant}
                  onChange={e => setNewTxMerchant(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(56,71,109,0.3)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="e.g. Amazon"
                />
              </div>
              <div>
                <label style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 8, display: 'block' }}>Amount ($)</label>
                <input 
                  type="number"
                  value={newTxAmount}
                  onChange={e => setNewTxAmount(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--surface-variant)', border: '1px solid rgba(56,71,109,0.3)',
                    color: 'var(--on-surface)', fontSize: 15,
                  }}
                  placeholder="e.g. 45.00"
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button 
                className="btn-glass"
                onClick={() => setIsTxModalOpen(false)}
                style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}
              >
                Cancel
              </button>
              <button 
                className="btn-primary"
                onClick={() => {
                  if(!newTxAmount || !newTxMerchant) return;
                  const newTx = {
                    id: Date.now(),
                    name: newTxMerchant,
                    category: 'Miscellaneous',
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    amount: `-$${parseFloat(newTxAmount).toFixed(2)}`,
                    amountColor: 'var(--on-surface)',
                    status: 'Pending',
                    statusColor: 'var(--error)',
                    icon: 'receipt_long',
                    iconColor: 'var(--secondary)',
                  };
                  setTransactions([newTx, ...transactions]);
                  setNewTxAmount('');
                  setNewTxMerchant('');
                  setIsTxModalOpen(false);
                }}
                style={{ padding: '10px 20px', borderRadius: 12, fontSize: 14 }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
