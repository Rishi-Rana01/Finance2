import { useState } from 'react'
import { RoleContext, DataContext, initialTransactions, initialCards, initialCategories } from './contexts'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Wallet from './pages/Wallet'
import Profile from './pages/Profile'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [role, setRole] = useState('user')
  
  const [transactions, setTransactions] = useState(initialTransactions)
  const [cards, setCards] = useState(initialCards)
  const [categories, setCategories] = useState(initialCategories)

  return (
    <DataContext.Provider value={{ transactions, setTransactions, cards, setCards, categories, setCategories }}>
      <RoleContext.Provider value={{ role, setRole }}>
        <div style={{ minHeight: '100dvh', backgroundColor: 'var(--background)', color: 'var(--on-surface)', transition: 'background-color 0.3s' }}>
          <Header activePage={activePage} setActivePage={setActivePage} />
          <main>
            {activePage === 'dashboard' && <Dashboard />}
            {activePage === 'budget' && <Budget />}
            {activePage === 'wallet' && <Wallet />}
            {activePage === 'profile' && <Profile />}
          </main>
          <BottomNav activePage={activePage} setActivePage={setActivePage} />
        </div>
      </RoleContext.Provider>
    </DataContext.Provider>
  )
}
