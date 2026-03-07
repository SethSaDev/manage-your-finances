import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTransactions } from '../hooks/useTransactions';
import { Input } from '../../../components/ui/Input';
import { Select } from '../../../components/ui/Select';
import { Button } from '../../../components/ui/Button';
import { CATEGORIES } from '../../../utils/categories';

export const AddTransactionForm = () => {
  const today = new Date().toISOString().split('T')[0];
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');
  const [date, setDate] = useState(today);

  const { add } = useTransactions();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) { toast.error('Description is required'); return; }
    if (!amount || isNaN(amount) || +amount === 0) { toast.error('Enter a valid non-zero amount'); return; }

    await add({ text: text.trim(), amount: +amount, category, date });
    toast.success('Transaction added');
    setText('');
    setAmount('');
    setCategory('Other');
    setDate(today);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <Input label="Description" id="text" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
        <Input label="Amount (negative = expense)" id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." step="0.01" />
        <Select label="Category" id="category" options={CATEGORIES} value={category} onChange={(e) => setCategory(e.target.value)} />
        <Input label="Date" id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button>Add transaction</Button>
      </form>
    </>
  );
};
