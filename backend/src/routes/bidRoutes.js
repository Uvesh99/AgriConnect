import express from 'express';
import { createBid, getBidsByProduct } from '../controllers/bidController.js';
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// POST - Create a bid
router.post('/', protect, createBid);

// GET - Get all bids for a product
router.get('/:productId', getBidsByProduct);

export default router;