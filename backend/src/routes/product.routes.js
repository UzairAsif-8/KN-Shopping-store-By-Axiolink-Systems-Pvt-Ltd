import { Router } from 'express';
import * as productController from '../controllers/product.controller.js';

const router = Router();

router.get('/', productController.getAll);
router.get('/featured', productController.getFeatured);
router.get('/bestsellers', productController.getBestSellers);
router.get('/search', productController.search);
router.get('/slug/:slug', productController.getBySlug);
router.get('/:id', productController.getById);

export default router;
