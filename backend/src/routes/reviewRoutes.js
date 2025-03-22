import express from 'express';
import { 
    createReview, 
    getProductReviews, 
} from '../controllers/reviewController.js';
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// ✅ Create a Review (POST)
router.post('/', protect, createReview);

// ✅ Get All Reviews for a Product (GET)
router.get('/:productId', getProductReviews);

export default router;