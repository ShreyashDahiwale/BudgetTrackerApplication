import { Router } from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { login, register } from '../controllers/authController.js';

const router = Router();
router.use(requireAuth);
router.post('/register', register);
router.post('/login', login);

export default router;


