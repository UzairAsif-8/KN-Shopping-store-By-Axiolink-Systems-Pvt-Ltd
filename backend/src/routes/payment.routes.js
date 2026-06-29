import { Router } from 'express';
import * as paymentController from '../controllers/payment.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);
router.post('/create-intent', paymentController.createIntent);
router.post('/confirm', paymentController.confirmPayment);
router.get('/methods', paymentController.getMethods);

export default router;
