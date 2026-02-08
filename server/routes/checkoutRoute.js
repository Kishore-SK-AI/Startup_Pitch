import express from "express";
import stripe from "../config/stripe.js";

const router = express.Router();


const PRODUCTS = {
  basic: {
    name: "Startup Pitch - Basic Plan",
    price: 499, // in INR
    image: "https://yourdomain.com/basic.png",
  },

  pro: {
    name: "Startup Pitch - Pro Plan",
    price: 999,
    image: "https://yourdomain.com/pro.png",
  },

  premium: {
    name: "Startup Pitch - Premium Plan",
    price: 1999,
    image: "https://yourdomain.com/premium.png",
  },
};

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { plan } = req.body;

    // Validate plan
    if (!PRODUCTS[plan]) {
      return res.status(400).json({ error: "Invalid plan" });
    }

    const product = PRODUCTS[plan];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: `${process.env.CLIENT_URL}/success`,

      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });

  } catch (err) {
    console.error("Stripe Error:", err);

    res.status(500).json({
      error: "Payment failed",
    });
  }
});

export default router;
