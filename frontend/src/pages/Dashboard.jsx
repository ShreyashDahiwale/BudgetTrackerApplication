import React, { useMemo } from 'react';
import SummaryChart from '../components/SummaryChart.jsx';
import BudgetChart from '../components/BudgetChart.jsx';

const SAMPLE = [
  { id: 1, date: 'Jan 5, 2024', description: 'Salary', category: 'Income', amount: 5000 },
  { id: 2, date: 'Jan 10, 2024', description: 'Groceries', category: 'Food', amount: 300 },
  { id: 3, date: 'Jan 15, 2024', description: 'Rent', category: 'Housing', amount: 1000 },
  { id: 4, date: 'Jan 18, 2024', description: 'Coffee', category: 'Food', amount: 50 },
  { id: 5, date: 'Jan 20, 2024', description: 'Movie', category: 'Entertainment', amount: 150 },
];

export default function Dashboard() {
  const { income, expense } = useMemo(() => {
    const income = SAMPLE.filter(t => t.category === 'Income').reduce((s, t) => s + t.amount, 0);
    const expense = SAMPLE.filter(t => t.category !== 'Income').reduce((s, t) => s + t.amount, 0);
    return { income, expense };
  }, []);

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <SummaryChart totalIncome={income} totalExpense={expense} />

      <div className="grid two">
        <div className="card">
          <div className="table-title">Transactions</div>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th className="right">Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.category}</td>
                  <td className="right">{t.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                  <td><button className="link">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <BudgetChart budget={2000} actual={1500} />
      </div>
    </div>
  );
}


