import Bid from '../models/Bid.js';

// Create a new bid
export const createBid = async (req, res) => {
    try {
        const { productId, price } = req.body;
        const userId = req.user.id;
        const newBid = new Bid({ productId, userId, price });
        await newBid.save();
        res.status(201).json(newBid);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all bids for a specific product
export const getBidsByProduct = async (req, res) => {
    try {
        const bids = await Bid.find(req.params.id)
                              .populate('userId', 'name');
        res.json(bids);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};