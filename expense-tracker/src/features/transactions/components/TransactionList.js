import React, { useState } from 'react';
import { useTransactions } from '../hooks/useTransactions';
import { TransactionItem } from './TransactionItem';
import { exportToCSV } from '../../../utils/exportCSV';

export const TransactionList = () => {
  const { transactions, loading, error } = useTransactions();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('date-desc');

  if (loading) return <p className="empty-state">Loading transactions...</p>;
  if (error)   return <p className="empty-state" style={{ color: '#c0392b' }}>{error}</p>;

  const categories = ['All', ...new Set(transactions.map((t) => t.category).filter(Boolean))];

  const filtered = transactions
    .filter((t) => filter === 'All' || t.category === filter)
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'date-desc') return new Date(b.date) - new Date(a.date);
      if (sort === 'date-asc')  return new Date(a.date) - new Date(b.date);
      if (sort === 'amount-desc') return Math.abs(b.amount) - Math.abs(a.amount);
      if (sort === 'amount-asc')  return Math.abs(a.amount) - Math.abs(b.amount);
      return 0;
    });

  return (
    <>
      <h3>History</h3>
      <div className="list-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search transactions"
        />
        <div className="list-controls-row">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter by category">
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort transactions">
            <option value="date-desc">Newest first</option>
            <option value="date-asc">Oldest first</option>
            <option value="amount-desc">Amount (high)</option>
            <option value="amount-asc">Amount (low)</option>
          </select>
          {transactions.length > 0 && (
            <button className="export-btn" onClick={() => exportToCSV(transactions)} aria-label="Export to CSV">
              Export CSV
            </button>
          )}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="empty-state">
          {transactions.length === 0 ? 'No transactions yet. Add one above!' : 'No results match your search.'}
        </p>
      ) : (
        <ul className="list">
          {filtered.map((t) => <TransactionItem key={t.id} transaction={t} />)}
        </ul>
      )}
    </>
  );
};
