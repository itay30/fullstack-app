import { Router } from 'express';
import facilityController from '../controllers/facility.controller';

const router = Router();

// GET all facilities
router.get('/', facilityController.getAllFacilities);

// GET facility by ID
router.get('/:id', facilityController.getFacilityById);

// GET search facilities
router.get('/search/:query', facilityController.searchFacilities);

export default router; 