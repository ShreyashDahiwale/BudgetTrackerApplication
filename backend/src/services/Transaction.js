import pool from '../config/db.js';

export async function listTransactions(userId) {
  const [rows] = await pool.query(
    'SELECT id, date, description, category, amount FROM transactions WHERE user_id = ? ORDER BY date DESC, id DESC',
    [userId]
  );
  return rows;
}

export async function createTransaction(userId, { date, description, category, amount }) {
  const [result] = await pool.query(
    'INSERT INTO transactions (user_id, date, description, category, amount) VALUES (?, ?, ?, ?, ?)',
    [userId, date, description, category, amount]
  );
  return { id: result.insertId, user_id: userId, date, description, category, amount };
}

export async function updateTransaction(userId, id, { date, description, category, amount }) {
  await pool.query(
    'UPDATE transactions SET date = ?, description = ?, category = ?, amount = ? WHERE id = ? AND user_id = ?',
    [date, description, category, amount, id, userId]
  );
}

export async function deleteTransaction(userId, id) {
  await pool.query('DELETE FROM transactions WHERE id = ? AND user_id = ?', [id, userId]);
}


