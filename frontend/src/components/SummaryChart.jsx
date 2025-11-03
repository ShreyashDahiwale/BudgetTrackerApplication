import React from 'react';

export default function SummaryChart({ totalIncome = 5000, totalExpense = 1500 }) {
  const balance = totalIncome - totalExpense;
  return (
    <div className="summary-grid">
      <div className="card">
        <div className="muted">Total Income</div>
        <div className="stat">{totalIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
      </div>
      <div className="card">
        <div className="muted">Total Expense</div>
        <div className="stat">{totalExpense.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
      </div>
      <div className="card">
        <div className="muted">Balance</div>
        <div className="stat">{balance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
      </div>
    </div>
  );
}


