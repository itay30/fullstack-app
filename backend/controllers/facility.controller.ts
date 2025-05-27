import { Request, Response } from 'express';
import facilityService from '../services/facility.service';

class FacilityController {
  async getAllFacilities(req: Request, res: Response) {
    try {
      const facilities = await facilityService.getAllFacilities();
      res.json(facilities);
    } catch (error) {
      console.error('Error in getAllFacilities:', error);
      res.status(500).json({ message: 'Error fetching facilities' });
    }
  }

  async getFacilityById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const facility = await facilityService.getFacilityById(id);
      
      if (!facility) {
        return res.status(404).json({ message: 'Facility not found' });
      }
      
      res.json(facility);
    } catch (error) {
      console.error('Error in getFacilityById:', error);
      res.status(500).json({ message: 'Error fetching facility' });
    }
  }

  async getFacilitiesByType(req: Request, res: Response) {
    try {
      const { type } = req.params;
      const facilities = await facilityService.getFacilitiesByType(type);
      res.json(facilities);
    } catch (error) {
      console.error('Error in getFacilitiesByType:', error);
      res.status(500).json({ message: 'Error fetching facilities by type' });
    }
  }

  async searchFacilities(req: Request, res: Response) {
    try {
      const { query } = req.params;
      const facilities = await facilityService.searchFacilities(query);
      res.json(facilities);
    } catch (error) {
      console.error('Error in searchFacilities:', error);
      res.status(500).json({ message: 'Error searching facilities' });
    }
  }
}

export default new FacilityController(); 