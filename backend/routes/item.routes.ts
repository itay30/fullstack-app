import { Router } from 'express';
import itemController from '../controllers/item.controller';

const router = Router();

// Get all items
router.get('/', itemController.getAllItems);

// Get item by ID
router.get('/:id', itemController.getItemById);

// Search items
router.get('/search/:query', itemController.searchItems);

export default router; 