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

  async getFacilitiesByType(type: string): Promise<Facility[]> {
    const searchType = type.toLowerCase();
    return this.facilities.filter(facility => 
      facility.type.toLowerCase().includes(searchType)
    );
  }

  async searchFacilities(query: string): Promise<Facility[]> {
    const searchTerm = query.toLowerCase();
    return this.facilities.filter(facility => 
      facility.name.toLowerCase().includes(searchTerm) ||
      facility.description.toLowerCase().includes(searchTerm) ||
      facility.type.toLowerCase().includes(searchTerm) ||
      facility.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      facility.location.city.toLowerCase().includes(searchTerm) ||
      facility.location.state.toLowerCase().includes(searchTerm)
    );
  }
}

export default new FacilityService();