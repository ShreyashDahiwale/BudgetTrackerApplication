import {commonCrud, download} from '../utils/mysqlCrud.js';

export async function findUserByEmail(email) {
  const [rows] = await db.commonCrud('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
  return rows[0] || null;
}

export async function createUser({ name, email, passwordHash }) {
  const [result] = await db.commonCrud('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [name, email, passwordHash]);
  return { id: result.insertId, name, email };
}


