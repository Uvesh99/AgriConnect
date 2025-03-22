import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the Farmer who owns the product
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
      enum: ["Fruits", "Vegetables", "Grains", "Dairy", "Others"],
      required: true,
    },
    price: { type: Number, required: true },
    quantityAvailable: { type: Number, required: true },
    image: { type: String }, // URL of product image
    location: { type: String, required: true },
    isOrganic: { type: Boolean, default: false },
    blockchainCertificate: { type: String }, // Certificate URL stored on blockchain
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
