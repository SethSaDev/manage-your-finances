import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTransactions } from './hooks/useTransactions';

const COLORS = ['#e74c3c', '#3498db', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#2ecc71', '#95a5a6'];

export const TransactionChart = () => {
  const { transactions } = useTransactions();

  const expenses = transactions.filter((t) => t.amount < 0);
  if (expenses.length === 0) return null;

  const byCategory = expenses.reduce((acc, t) => {
    const cat = t.category || 'Other';
    acc[cat] = (acc[cat] || 0) + Math.abs(t.amount);
    return acc;
  }, {});

  const data = Object.entries(byCategory).map(([name, value]) => ({
    name,
    value: +value.toFixed(2),
  }));

  return (
    <>
      <h3>Expenses by Category</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip formatter={(v) => `$${v.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
