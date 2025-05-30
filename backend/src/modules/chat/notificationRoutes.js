import express from "express";
import {
  getNotifications,
  markNotificationAsRead,
} from "./notificationController.js";
import protect from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getNotifications);
router.put("/:id/mark-read", protect, markNotificationAsRead);

export default router;
