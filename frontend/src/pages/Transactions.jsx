import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm.jsx';
import TransactionList from '../components/TransactionList.jsx';

const INITIAL = [
  { id: 1, date: '2024-01-05', description: 'Salary', category: 'Income', amount: 5000 },
  { id: 2, date: '2024-01-10', description: 'Groceries', category: 'Food', amount: 300 },
  { id: 3, date: '2024-01-15', description: 'Rent', category: 'Housing', amount: 1000 },
  { id: 4, date: '2024-01-18', description: 'Coffee', category: 'Food', amount: 50 },
  { id: 5, date: '2024-01-20', description: 'Movie', category: 'Entertainment', amount: 150 },
];

export default function Transactions() {
  const [items, setItems] = useState(INITIAL);

  function handleAdd(newTx) {
    const id = Math.max(...items.map((i) => i.id)) + 1;
    setItems((prev) => [...prev, { ...newTx, id }]);
  }

  function handleEdit(t) {
    alert(`Edit ₹{t.description} (stub)`);
  }

  const display = items.map((t) => ({
    ...t,
    date: new Date(t.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
  }));

  return (
    <div className="page">
      <h1>Transactions</h1>
      <div className="grid two">
        <TransactionForm onAdd={handleAdd} />
        <TransactionList items={display} onEdit={handleEdit} />
      </div>
    </div>
  );
}


