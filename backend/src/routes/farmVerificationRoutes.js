import express from "express";
import { uploadFarmVerification } from "../controllers/farmVerificationController.js";
import {upload} from "../middlewares/multer.middleware.js"; // Multer for file upload

const router = express.Router();

// Route: Upload Farm Verification Data
router.post("/upload", 
    upload.fields([
        { 
            name: "images" 
        }, 
        { 
            name: "videos" 
        }
    ]), 
    uploadFarmVerification
);
    
export default router;
