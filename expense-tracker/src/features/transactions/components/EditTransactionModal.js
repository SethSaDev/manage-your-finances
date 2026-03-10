import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTransactions } from '../hooks/useTransactions';
import { Modal } from '../../../components/ui/Modal';
import { Input } from '../../../components/ui/Input';
import { Select } from '../../../components/ui/Select';
import { Button } from '../../../components/ui/Button';
import { CATEGORIES } from '../../../utils/categories';

export const EditTransactionModal = ({ transaction, onClose }) => {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category || 'Other');
  const [date, setDate] = useState(transaction.date || new Date().toISOString().split('T')[0]);

  const { edit } = useTransactions();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) { toast.error('Description is required'); return; }
    if (!amount || isNaN(amount) || +amount === 0) { toast.error('Enter a valid non-zero amount'); return; }
    edit({ ...transaction, text: text.trim(), amount: +amount, category, date });
    toast.success('Transaction updated');
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h3>Edit Transaction</h3>
      <form onSubmit={onSubmit}>
        <Input label="Description" id="edit-text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <Input label="Amount" id="edit-amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} step="0.01" />
        <Select label="Category" id="edit-category" options={CATEGORIES} value={category} onChange={(e) => setCategory(e.target.value)} />
        <Input label="Date" id="edit-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button>Save changes</Button>
        <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
      </form>
    </Modal>
  );
};
