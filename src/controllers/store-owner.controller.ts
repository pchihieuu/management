import { Router } from 'express';
import { StoreOwnerService } from '../services/store-owner.service';

const router = Router();
const storeOwnerService = new StoreOwnerService();

router.post('/', async (req, res) => {
  try {
    const owner = await storeOwnerService.createStoreOwner(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create store owner' });
  }
});

export default router;
