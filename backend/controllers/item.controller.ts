import { Request, Response } from 'express';
import itemService from '../services/item.service';

class ItemController {
  async getAllItems(req: Request, res: Response) {
    try {
      const items = await itemService.getAllItems();
      res.json(items);
    } catch (error) {
      console.error('Error in getAllItems:', error);
      res.status(500).json({ message: 'Error fetching items' });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const item = await itemService.getItemById(id);
      
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      
      res.json(item);
    } catch (error) {
      console.error('Error in getItemById:', error);
      res.status(500).json({ message: 'Error fetching item' });
    }
  }

  async searchItems(req: Request, res: Response) {
    try {
      const { query } = req.params;
      const items = await itemService.searchItems(query);
      res.json(items);
    } catch (error) {
      console.error('Error in searchItems:', error);
      res.status(500).json({ message: 'Error searching items' });
    }
  }
}

export default new ItemController(); 