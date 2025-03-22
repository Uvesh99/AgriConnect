// controllers/reviewController.js
import Review from '../models/Review.js';

// ✅ Create a Review
export const createReview = async (req, res) => {
    const { productId, rating, review } = req.body;
    const userId = req.user.id;

    if (rating < 0 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 0 and 5" });
    }

    try {
        const newReview = new Review({ productId, userId, rating, review });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get All Reviews for a Product
export const getProductReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({ productId })
            .populate('userId', 'name')
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
