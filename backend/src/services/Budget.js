import {commonCrud, download} from '../utils/mysqlCrud.js';

export async function getBudget(userId) {
  const [rows] = await pool.query('SELECT id, planned AS budget, actual FROM budgets WHERE user_id = ? LIMIT 1', [userId]);
  return rows[0] || { id: null, budget: 0, actual: 0 };
}

export async function upsertBudget(userId, { budget, actual }) {
  await pool.query(
    'INSERT INTO budgets (user_id, planned, actual) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE planned = VALUES(planned), actual = VALUES(actual)',
    [userId, budget, actual]
  );
}


