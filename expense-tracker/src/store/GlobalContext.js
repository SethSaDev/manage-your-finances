import React, { createContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';
import reducer from './reducer';
import { transactionService } from '../services/transactionService';

const initialState = { transactions: [], loading: true, error: null };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    transactionService.getAll()
      .then((data) => dispatch({ type: 'SET_TRANSACTIONS', payload: data }))
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Failed to load transactions' }));
  }, []);

  const addTransaction = async (t) => {
    try {
      const created = await transactionService.create(t);
      dispatch({ type: 'ADD_TRANSACTION', payload: created });
    } catch {
      toast.error('Failed to add transaction');
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await transactionService.remove(id);
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch {
      toast.error('Failed to delete transaction');
    }
  };

  const editTransaction = async (t) => {
    try {
      const updated = await transactionService.update(t.id, t);
      dispatch({ type: 'EDIT_TRANSACTION', payload: updated });
    } catch {
      toast.error('Failed to update transaction');
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
