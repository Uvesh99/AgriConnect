import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
import farmVerificationRoutes from "./routes/farmVerificationRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js"
import cors from "cors"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes); 
// app.use("/api/payment", paymentRoutes); 
app.use("/api/farm-verification", farmVerificationRoutes);
app.use("/api/tokens", tokenRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to AgriConnect API's")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
