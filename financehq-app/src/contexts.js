import { createContext} from 'react'

export const RoleContext = createContext()
export const DataContext = createContext()

export const initialTransactions = [
  {
    id: 1,
    name: 'Apple Store',
    category: 'Technology',
    date: 'Oct 24, 2023',
    amount: '-$1,299.00',
    amountColor: 'var(--on-surface)',
    status: 'Pending',
    statusColor: 'var(--error)',
    icon: 'ios',
    iconColor: 'var(--primary)',
  },
  {
    id: 2,
    name: 'The Luminary Grill',
    category: 'Dining',
    date: 'Oct 22, 2023',
    amount: '-$84.50',
    amountColor: 'var(--on-surface)',
    status: 'Completed',
    statusColor: 'var(--secondary)',
    icon: 'restaurant',
    iconColor: 'var(--secondary)',
  },
  {
    id: 3,
    name: 'Delta Airlines',
    category: 'Travel',
    date: 'Oct 18, 2023',
    amount: '-$450.00',
    amountColor: 'var(--on-surface)',
    status: 'Completed',
    statusColor: 'var(--secondary)',
    icon: 'flight_takeoff',
    iconColor: 'var(--tertiary)',
  },
  {
    id: 4,
    name: 'Salary Deposit',
    category: 'Income',
    date: 'Oct 15, 2023',
    amount: '+$8,420.00',
    amountColor: 'var(--secondary)',
    status: 'Completed',
    statusColor: 'var(--secondary)',
    icon: 'account_balance',
    iconColor: 'var(--primary)',
  },
]

export const initialCards = [
  {
    id: 1,
    type: 'card',
    name: 'Indian Visa',
    number: '**** **** **** 4892',
    holder: 'Zorvyn',
    expires: '12/28'
  },
  {
    id: 2,
    type: 'bank',
    name: 'Main Checking',
    number: 'Bank of India •••• 9921',
    balance: '$12,450.00',
    status: 'Active'
  }
]

export const initialCategories = [
  {
    id: 'housing', label: 'Housing', sub: 'Fixed Monthly',
    icon: 'home', iconColor: 'var(--primary)',
    spent: 3200, budget: 3500, barColor: 'var(--primary)',
    glowColor: 'rgba(144,147,255,0.4)',
  },
  {
    id: 'groceries', label: 'Groceries', sub: 'Variable Spending',
    icon: 'shopping_cart', iconColor: 'var(--secondary)',
    spent: 450, budget: 800, barColor: 'var(--secondary)',
    glowColor: 'rgba(78,222,163,0.4)',
  },
  {
    id: 'entertainment', label: 'Entertainment', sub: 'Discretionary',
    icon: 'movie', iconColor: 'var(--tertiary)',
    spent: 380, budget: 400, barColor: 'var(--tertiary)',
    glowColor: 'rgba(221,183,255,0.4)',
  },
  {
    id: 'dining', label: 'Dining', sub: 'Social & Lifestyle',
    icon: 'restaurant', iconColor: 'var(--primary)',
    spent: 620, budget: 500, barColor: 'var(--error)',
    glowColor: 'rgba(253,111,133,0.4)',
  },
]
