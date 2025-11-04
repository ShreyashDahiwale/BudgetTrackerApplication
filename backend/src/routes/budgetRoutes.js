import { Router } from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { readBudget, saveBudget } from '../controllers/budgetController.js';

const router = Router();
router.use(requireAuth);
router.get('/', readBudget);
router.post('/', saveBudget);

export default router;


