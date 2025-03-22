import express from "express";
import multer from "multer";
import { verifyFarmer } from "../controllers/certificationController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route for farmer verification
router.post("/verify-farmer", upload.fields([
  { name: "income_certificate", maxCount: 1 },
  { name: "soil_test_report", maxCount: 1 },
  { name: "land_document", maxCount: 1 }
]), verifyFarmer);

export default router;
