import React from 'react';
import BudgetChart from '../components/BudgetChart.jsx';

export default function Budget() {
  return (
    <div className="page">
      <h1>Budget</h1>
      <div className="grid one">
        <BudgetChart budget={2000} actual={1500} />
      </div>
    </div>
  );
}


