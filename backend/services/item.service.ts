import mockItems from '../data/mock-items.json';

interface Item {
  _id: string;
  title: string;
  description: string;
  img: string;
}

class ItemService {
  private items: Item[] = mockItems;

  async getAllItems(): Promise<Item[]> {
    return this.items;
  }

  async getItemById(id: string): Promise<Item | undefined> {
    return this.items.find(item => item._id === id);
  }

  async searchItems(query: string): Promise<Item[]> {
    const lowercaseQuery = query.toLowerCase();
    return this.items.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) || 
      item.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export default new ItemService(); 