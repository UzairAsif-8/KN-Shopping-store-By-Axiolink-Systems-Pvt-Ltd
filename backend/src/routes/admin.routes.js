import { Router } from 'express';
import { login, refresh, logout, getMe, getDashboard } from '../controllers/admin.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { requireAdmin } from '../middleware/admin.middleware.js';
import { authLimiter } from '../middleware/rateLimiter.middleware.js';
import { adminLoginSchema } from '../validators/admin.validator.js';

const router = Router();

router.post('/login', authLimiter, validate(adminLoginSchema), login);
router.post('/refresh', authLimiter, refresh);
router.post('/logout', logout);
router.get('/me', authenticate, requireAdmin, getMe);
router.get('/dashboard', authenticate, requireAdmin, getDashboard);

export default router;
