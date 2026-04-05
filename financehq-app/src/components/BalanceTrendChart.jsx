import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--surface-container-high)',
        border: '1px solid var(--outline-variant)',
        borderRadius: 8,
        padding: '8px 12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: 11, marginBottom: 4 }}>{label}</p>
        <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 14 }}>
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function BalanceTrendChart({ activeRange }) {
  const dataMap = {
    '1W': [
      { name: 'Mon', balance: 39500 }, { name: 'Tue', balance: 41200 }, 
      { name: 'Wed', balance: 40500 }, { name: 'Thu', balance: 42800 }, 
      { name: 'Fri', balance: 44000 }, { name: 'Today', balance: 45230 }
    ],
    '1M': [
      { name: 'Oct 01', balance: 35000 }, { name: 'Oct 06', balance: 37500 }, 
      { name: 'Oct 12', balance: 36200 }, { name: 'Oct 18', balance: 41000 }, 
      { name: 'Oct 24', balance: 43500 }, { name: 'Today', balance: 45230 }
    ],
    '6M': [
      { name: 'May', balance: 22000 }, { name: 'Jun', balance: 25000 }, 
      { name: 'Jul', balance: 28500 }, { name: 'Aug', balance: 34000 }, 
      { name: 'Sep', balance: 40000 }, { name: 'Today', balance: 45230 }
    ],
    '1Y': [
      { name: 'Q1', balance: 18000 }, { name: 'Q2', balance: 24000 }, 
      { name: 'Q3', balance: 32000 }, { name: 'Q4', balance: 41000 }, 
      { name: 'Today', balance: 45230 }
    ]
  };

  const data = dataMap[activeRange] || dataMap['1M'];

  return (
    <div style={{ position: 'relative', height: 320, width: '100%', marginTop: 24 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'var(--on-surface-variant)', fontSize: 11, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            hide
            domain={['dataMin - 2000', 'dataMax + 2000']} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="var(--primary)" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorBalance)" 
            activeDot={{ r: 6, fill: '#fff', stroke: 'var(--primary)', strokeWidth: 3 }}
            animationDuration={600}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
