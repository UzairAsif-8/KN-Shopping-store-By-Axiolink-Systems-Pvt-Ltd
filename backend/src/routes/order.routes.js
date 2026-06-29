import { Router } from 'express';
import * as orderController from '../controllers/order.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);
router.get('/', orderController.getAll);
router.post('/', orderController.create);
router.get('/:id', orderController.getById);
router.patch('/:id/cancel', orderController.cancel);

export default router;
