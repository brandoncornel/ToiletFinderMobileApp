import express, { Router } from 'express';
// Import index action from movies controller
import { list,add } from './controllers/toilets';
import Toilet from './models/toilet.js';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/toilets.json')
  .get(list);

router.route('/toilets.json')
    .post(add);
export default router;
