// routes/paymentRoutes.js
import express from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/order", createOrder); // Create a Razorpay order
router.post("/verify", verifyPayment); // Verify payment signature

export default router;