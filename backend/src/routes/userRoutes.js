import express from "express";
import protect from "../middlewares/authMiddleware.js"
import { getUsers, getUserProfile, updateUserProfile, getUserById } from "../controllers/userController.js";

const router = express.Router();


router.get("/profile", protect, getUserProfile);
router.get("/:id",getUserById);

router.put("/profile", protect, updateUserProfile);
router.get("/",protect, getUsers);

export default router;
