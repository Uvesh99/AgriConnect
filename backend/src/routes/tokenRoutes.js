import express from "express";
import { earnTokens, redeemTokens, donateTokens, getUserBalance, getTransactionHistory, getTopDonors, getUserPerks } from "../controllers/tokenController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// Routes for token-based transactions
router.post("/earn", protect, earnTokens);         // Earn GreenTrust Tokens
router.post("/redeem", protect, redeemTokens);     // Redeem tokens for discounts
router.post("/donate", protect, donateTokens);     // Donate tokens to farmers
router.get("/balance/:id", protect, getUserBalance);  // Check token balance
router.get("/history/:id", protect, getTransactionHistory); // Fetch transaction history
router.get("/leaderboard", getTopDonors);//// Leaderboard: Fetch top donors - this should be display in community
router.get("/perks/:userId", protect, getUserPerks);

export default router;
