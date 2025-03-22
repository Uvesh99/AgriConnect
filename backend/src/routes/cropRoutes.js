import express from "express";

import {
  createCrop,
  getCrops,
  getCropById,
  updateCropPhase,
} from "../controllers/cropController.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new crop (requires authentication)

router.post("/", protect, createCrop);

// Get all crops for a particular farmer (requires authentication)

router.get("/", protect, getCrops);

// Get a single crop by ID for a particular farmer (requires authentication)

router.get("/:id", getCropById);

// Update crop phase (requires authentication)

router.put("/:id", protect, updateCropPhase);

export default router;
