import { Router } from 'express';
import * as reviewController from '../controllers/review.controller.js';

const router = Router();

router.get('/product/:productId', reviewController.getByProduct);
router.post('/product/:productId', reviewController.create);
router.patch('/:id', reviewController.update);
router.delete('/:id', reviewController.remove);

export default router;
