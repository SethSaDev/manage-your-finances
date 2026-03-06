import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTransactions } from '../hooks/useTransactions';
import { EditTransactionModal } from './EditTransactionModal';
import { formatMoney, formatDate } from '../../../utils/format';

export const TransactionItem = ({ transaction }) => {
  const { remove } = useTransactions();
  const [editing, setEditing] = useState(false);

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDelete = () => {
    if (window.confirm(`Delete "${transaction.text}"?`)) {
      remove(transaction.id);
      toast.success('Transaction deleted');
    }
  };

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <div className="transaction-info">
          <span className="transaction-text">{transaction.text}</span>
          <span className="transaction-meta">
            <span className="category-badge">{transaction.category || 'Other'}</span>
            {transaction.date && (
              <span className="transaction-date">{formatDate(transaction.date)}</span>
            )}
          </span>
        </div>
        <div className="transaction-right">
          <span className="transaction-amount">
            {sign}{formatMoney(Math.abs(transaction.amount))}
          </span>
          <div className="transaction-actions">
            <button onClick={() => setEditing(true)} className="edit-btn" aria-label={`Edit ${transaction.text}`}>✏</button>
            <button onClick={handleDelete} className="delete-btn" aria-label={`Delete ${transaction.text}`}>×</button>
          </div>
        </div>
      </li>
      {editing && <EditTransactionModal transaction={transaction} onClose={() => setEditing(false)} />}
    </>
  );
};
