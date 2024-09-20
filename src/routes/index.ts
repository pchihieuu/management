import { Router } from 'express';
import storeOwnerRoutes from '../controllers/store-owner.controller';
import storeRoutes from '../controllers/store.controller';
// Import other controllers

const router = Router();

router.use('/store-owners', storeOwnerRoutes);
router.use('/stores', storeRoutes);
// Add other routes

export default router;
