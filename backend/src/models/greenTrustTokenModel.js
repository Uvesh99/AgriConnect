import mongoose from "mongoose";

const greenTrustTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("GreenTrustToken",greenTrustTokenSchema)
