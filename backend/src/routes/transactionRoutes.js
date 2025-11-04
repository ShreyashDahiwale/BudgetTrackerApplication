import { Router } from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { getTransactions, addTransaction, editTransaction, removeTransaction } from '../controllers/transactionController.js';

const router = Router();
router.use(requireAuth);
router.get('/', getTransactions);
router.post('/', addTransaction);
router.put('/:id', editTransaction);
router.delete('/:id', removeTransaction);

export default router;


