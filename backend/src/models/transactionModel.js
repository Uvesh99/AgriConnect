import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["earn", "redeem", "donate"], required: true },
    amount: { type: Number, required: true },
    details: { type: String },
  }, { timestamps: true });

  export default mongoose.model("Transaction", transactionSchema);