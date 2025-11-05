import { getBudget, upsertBudget } from '../services/Budget.js';

export async function readBudget(req, res) {
  const data = await getBudget(req.user.id);
  res.json(data);
}

export async function saveBudget(req, res) {
  const { budget, actual } = req.body;
  await upsertBudget(req.user.id, { budget, actual });
  res.json({ ok: true });
}


