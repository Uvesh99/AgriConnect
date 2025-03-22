import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/", protect, createProduct); // Only farmers can add products
router.get("/", getAllProducts); // Anyone can view products
router.get("/:id", getProductById); // View single product
router.put("/:id", protect, updateProduct); // Only farmers can update their products
router.delete("/:id", protect, deleteProduct); // Only farmers can delete their products

export default router;
