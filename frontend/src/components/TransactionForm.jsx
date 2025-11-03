import React, { useState } from 'react';

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    date: '',
    description: '',
    category: 'Income',
    amount: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.date || !form.description || !form.amount) return;
    onAdd?.({ ...form, amount: Number(form.amount) });
    setForm({ date: '', description: '', category: 'Income', amount: '' });
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Description</label>
        <input name="description" placeholder="e.g. Salary" value={form.description} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Income</option>
          <option>Food</option>
          <option>Housing</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-row">
        <label>Amount</label>
        <input name="amount" type="number" step="0.01" placeholder="0.00" value={form.amount} onChange={handleChange} />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn primary">Add</button>
      </div>
    </form>
  );
}


