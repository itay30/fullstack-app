import { Router } from 'express';
import facilityController from '../controllers/facility.controller';

const router = Router();

// GET all facilities
router.get('/', facilityController.getAllFacilities);

// GET facility by ID
router.get('/:id', facilityController.getFacilityById);

// GET facilities by type
router.get('/type/:type', facilityController.getFacilitiesByType);

// GET search facilities
router.get('/search/:query', facilityController.searchFacilities);

export default router; 