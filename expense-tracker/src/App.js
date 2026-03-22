import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from './store/GlobalContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { Header } from './components/layout/Header';
import {
  Balance,
  IncomeExpenses,
  TransactionChart,
  TransactionList,
  AddTransactionForm,
} from './features/transactions';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionChart />
          <TransactionList />
          <AddTransactionForm />
        </div>
      </GlobalProvider>
    </ErrorBoundary>
  );
}

export default App;
