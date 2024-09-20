import { Router } from 'express';
import { StoreService } from '../services/store.service';

const router = Router();
const storeService = new StoreService();

router.get('/', async (req, res) => {
  try {
    const stores = await storeService.getAllStores();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get stores' });
  }
});



export default router;
