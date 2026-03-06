import React from 'react';
import { useTransactions } from '../hooks/useTransactions';
import { formatMoney } from '../../../utils/format';

export const Balance = () => {
  const { transactions } = useTransactions();
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={total < 0 ? 'balance-negative' : ''}>{formatMoney(total)}</h1>
    </>
  );
};
