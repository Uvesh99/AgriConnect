import GreenTrustToken from "../models/greenTrustTokenModel.js";
import Transaction from "../models/transactionModel.js";
import User from "../models/User.js";
import mongoose from "mongoose";

// Earn Tokens when purchasing from a farmer
export const earnTokens = async (req, res) => {
    try {
        const { userId, amountSpent } = req.body;
        if (!userId || !amountSpent) {
            return res.status(400).json({ message: "User ID and amount spent are required." });
        }

        // Calculate tokens earned (e.g., 1 token per $10 spent)
        const tokensEarned = Math.floor(amountSpent / 10);
        let userTokens = await GreenTrustToken.findOne({ userId });
        
        if (!userTokens) {
            userTokens = new GreenTrustToken({ userId, balance: 0 });
        }

        userTokens.balance += tokensEarned;
        await userTokens.save();

        // Record transaction
        await Transaction.create({ userId, type: "earn", amount: tokensEarned });

        res.status(200).json({ message: "Tokens earned successfully!", balance: userTokens.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Redeem Tokens for discounts
export const redeemTokens = async (req, res) => {
    try {
        const { userId, tokensToRedeem } = req.body;
        if (!userId || !tokensToRedeem) {
            return res.status(400).json({ message: "User ID and token amount are required." });
        }

        const userTokens = await GreenTrustToken.findOne({ userId });
        if (!userTokens || userTokens.balance < tokensToRedeem) {
            return res.status(400).json({ message: "Insufficient tokens." });
        }

        userTokens.balance -= tokensToRedeem;
        await userTokens.save();

        // Record transaction
        await Transaction.create({ userId, type: "redeem", amount: tokensToRedeem });

        res.status(200).json({ message: "Tokens redeemed successfully!", balance: userTokens.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Donate Tokens to Farmers
export const donateTokens = async (req, res) => {
    try {
        const { userId, farmerId, tokensToDonate } = req.body;
        if (!userId || !farmerId || !tokensToDonate) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const userTokens = await GreenTrustToken.findOne({ userId });
        if (!userTokens || userTokens.balance < tokensToDonate) {
            return res.status(400).json({ message: "Insufficient tokens." });
        }

        userTokens.balance -= tokensToDonate;
        await userTokens.save();

        let farmerTokens = await GreenTrustToken.findOne({ userId: farmerId });
        if (!farmerTokens) {
            farmerTokens = new GreenTrustToken({ userId: farmerId, balance: 0 });
        }
        farmerTokens.balance += tokensToDonate;
        await farmerTokens.save();

        // Record transactions
        await Transaction.create({ userId, type: "donate", amount: tokensToDonate, recipientId: farmerId });

        res.status(200).json({ message: "Tokens donated successfully!", balance: userTokens.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get User Token Balance
export const getUserBalance = async (req, res) => {
    try {
        const  userId  = req.params.id;
        console.log(userId)
        const userTokens = await GreenTrustToken.findOne({ userId });
        console.log(userTokens)
        res.status(200).json({ balance: userTokens ? userTokens.balance : 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get User Transaction History
export const getTransactionHistory = async (req, res) => {
    try {
        const  userId  = req.params.id;
        console.log(userId)
        const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get Top Donors (Leaderboard)
export const getTopDonors = async (req, res) => {
  try {
    const topDonors = await Transaction.aggregate([
      { $match: { type: "donate" } }, // Only consider donation transactions
      { $group: { _id: "$userId", totalDonated: { $sum: "$amount" } } },
      { $sort: { totalDonated: -1 } },
      { $limit: 10 }, // Get top 10 donors
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          _id: 0,
          userId: "$user._id",
          name: "$user.name",
          totalDonated: 1,
        },
      },
    ]);

    res.status(200).json({ leaderboard: topDonors });
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error: error.message });
  }
};

// Get User Perks Based on Donations
export const getUserPerks = async (req, res) => {
  try {
    const { userId } = req.params;

    // Get total donated tokens by this user
    const userDonations = await Transaction.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId), type: "donate" } },
      { $group: { _id: "$userId", totalDonated: { $sum: "$amount" } } },
    ]);

    if (!userDonations.length) {
      return res.status(200).json({ message: "No donations made yet", perks: [] });
    }

    const totalDonated = userDonations[0].totalDonated;

    // Define reward tiers based on donation amount
    let perks = [];
    if (totalDonated >= 500) perks.push("Premium Farm Visit");
    if (totalDonated >= 300) perks.push("Early Access to Special Products");
    if (totalDonated >= 100) perks.push("Exclusive Discounts on Purchases");

    res.status(200).json({ totalDonated, perks });
  } catch (error) {
    res.status(500).json({ message: "Error fetching perks", error: error.message });
  }
};
