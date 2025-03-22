// controllers/paymentController.js
import Razorpay from "razorpay";
import crypto from "crypto";
import Payment from "../models/Payment.js";
import Order from "../models/Order.js";
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { orderId, amount, currency } = req.body;
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: currency || "INR",
      receipt: orderId,
    });

    const newPayment = new Payment({
      userId: req.user.id,
      orderId,
      razorpayOrderId: order.id,
      amount,
      currency,
      status: "created",
    });
    await newPayment.save();

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });
    
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      payment.status = "paid";
      payment.razorpayPaymentId = razorpay_payment_id;
      await payment.save();
      await Order.findByIdAndUpdate(payment.orderId, { status: "paid" });

      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
