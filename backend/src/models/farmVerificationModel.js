import mongoose from "mongoose";

const farmVerificationSchema = new mongoose.Schema(
  {
    farmerId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    images: [{ 
      type: String, 
      required: true 
    }], // Cloudinary image URLs
    description:{
      type: String,
      required: true
    },
    videos: [{ 
      type: String 
    }], // Cloudinary video URLs (Optional)
    city:{
      type: String,
      required: true
    }, // Geo-tagging for farm location
    aiVerified: { 
      type: Boolean, 
      default: false 
    }, // AI-based verification status
    blockchainCertificate: { 
      type: String 
    }, // Blockchain transaction ID or hash (for future verification)
  }, 
  { timestamps: true }
);

export default mongoose.model("FarmVerification", farmVerificationSchema);
