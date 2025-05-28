import { readFileSync } from 'fs';
import { join } from 'path';
import { Facility } from '../models/facility.model';

class FacilityService {
  private facilities: Facility[];

  constructor() {
    this.facilities = this.loadFacilities();
  }

  private loadFacilities(): Facility[] {
    try {
      const data = readFileSync(join(__dirname, '../data/mock-facilities.json'), 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading facilities:', error);
      return [];
    }
  }

  async getAllFacilities(): Promise<Facility[]> {
    return this.facilities;
  }

  async getFacilityById(id: string): Promise<Facility | undefined> {
    return this.facilities.find(facility => facility._id === id);
  }


  async searchFacilities(query: string): Promise<Facility[]> {
    const searchTerm = query.toLowerCase();
    return this.facilities.filter(facility => 
      facility.name.toLowerCase().includes(searchTerm)
    );
  }
}

export default new FacilityService();