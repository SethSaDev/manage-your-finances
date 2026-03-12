import { useContext } from 'react';
import { GlobalContext } from '../../../store/GlobalContext';

export const useTransactions = () => {
  const { transactions, loading, error, addTransaction, deleteTransaction, editTransaction } =
    useContext(GlobalContext);

  return {
    transactions,
    loading,
    error,
    add: addTransaction,
    remove: deleteTransaction,
    edit: editTransaction,
  };
};
