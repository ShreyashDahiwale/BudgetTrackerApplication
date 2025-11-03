import React from 'react';

export default function TransactionList({ items = [], onEdit }) {
  return (
    <div className="card table-card">
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
          {items.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{t.category}</td>
              <td className="right">{t.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
              <td>
                <button className="link" onClick={() => onEdit?.(t)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


