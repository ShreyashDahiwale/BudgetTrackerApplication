import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BudgetChart({ budget = 2000, actual = 1500 }) {
  const data = {
    labels: ['Budget', 'Actual'],
    datasets: [
      {
        label: 'Amount',
        data: [budget, actual],
        backgroundColor: ['#3b82f6', '#38bdf8'],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: (v) => `₹${v}` } },
    },
  };

  return (
    <div className="card">
      <div className="card-title">Budget</div>
      <Bar data={data} options={options} height={140} />
    </div>
  );
}


