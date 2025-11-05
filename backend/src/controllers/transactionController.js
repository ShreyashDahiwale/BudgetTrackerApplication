import { listTransactions, createTransaction, updateTransaction, deleteTransaction } from '../services/Transaction.js';

export async function getTransactions(req, res) {
  const items = await listTransactions(req.user.id);
  res.json(items);
}

export async function addTransaction(req, res) {
  const created = await createTransaction(req.user.id, req.body);
  res.status(201).json(created);
}

export async function editTransaction(req, res) {
  await updateTransaction(req.user.id, req.params.id, req.body);
  res.json({ ok: true });
}

export async function removeTransaction(req, res) {
  await deleteTransaction(req.user.id, req.params.id);
  res.json({ ok: true });
}


