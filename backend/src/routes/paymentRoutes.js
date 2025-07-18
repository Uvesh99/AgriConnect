import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST /api/payment/create-checkout-session
router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  try {
    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          description: item.description,
        },
        unit_amount: item.price * 100, // Stripe needs amount in paisa
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
