import express from "express";
import {
  placeOrder,
  getConsumerOrders,
  getFarmerOrders,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/", protect, placeOrder); // Consumers place orders
router.get("/", protect, getConsumerOrders); // Consumers view their orders
router.get("/farmer", protect, getFarmerOrders); // Farmers view their orders
router.put("/:id", protect, updateOrderStatus); // Farmers update order status
router.delete("/:id", protect, cancelOrder); // Consumers cancel orders

export default router;
