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
import certificationRoutes from "./routes/certificationRoutes.js";
import cropRoutes from "./routes/cropRoutes.js"
import bidRoutes from "./routes/bidRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import http from "http";
import { initSocket } from "./modules/chat/socket.js";
import chatRoutes from "./modules/chat/chat.routes.js"
import notificationRoutes from "./modules/chat/notificationRoutes.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes); 
// app.use("/api/payment", paymentRoutes); 
app.use("/api/farm-verification", farmVerificationRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/crop",cropRoutes);
app.use("/api/bid",bidRoutes);
app.use("/api/review",reviewRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/notifications", notificationRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to AgriConnect API's")
})

// Socket.IO
initSocket(server);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
