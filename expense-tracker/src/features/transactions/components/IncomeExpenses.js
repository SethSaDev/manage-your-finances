import React from 'react';
import { useTransactions } from '../hooks/useTransactions';
import { formatMoney } from '../../../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useTransactions();

  const income = transactions.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter((t) => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{formatMoney(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{formatMoney(expense)}</p>
      </div>
    </div>
  );
};
