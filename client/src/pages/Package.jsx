import React, { useState, useEffect } from "react";
import "./Pricing.css";
import api from "../config/axios";

const Pricing = () => {
  // Store whether user is Pro or not
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(false);

  // (Optional) Fetch user plan from backend
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const res = await api.get(`/user/${userId}`);
        // backend should return: { isPro: true/false }
        console.log(res.data);
        setIsPro(res.data.isPro);
      } catch (err) {
        console.error("Failed to fetch user plan", err);
      }
    };

    fetchUserPlan();
  }, []);

  // Handle checkout
  const handleCheckout = async () => {
    if (isPro) {
      alert("You are already Pro!");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/checkout/create-checkout-session", {
        plan: "pro", // 👈 IMPORTANT
      });

      // Redirect to Stripe
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Upgrade your plan</h1>

      <div className="cards-container">
        {/* Free Plan */}
        <div className="card free-card">
          <h2 className="plan-name">Free</h2>

          <div className="price-container">
            <span className="currency">₹</span>
            <span className="price">0</span>
            <span className="period">INR / month</span>
          </div>

          <p className="description">See what AI can do</p>

          <button className="cta-button current-plan" disabled={isPro}>
            {isPro ? "Not Available" : "Your current plan"}
          </button>

          <ul className="features-list">
            <li>✨ Get simple explanations</li>
            <li>💬 Short chats</li>
            <li>🖼️ Image generation</li>
            <li>ℹ️ Limited memory</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="card pro-card">
          <h2 className="plan-name">Pro</h2>

          <div className="price-container">
            <span className="currency">₹</span>
            <span className="price">19,900</span>
            <span className="period">INR / month (GST included)</span>
          </div>

          <p className="description">Maximize your productivity</p>

          <button
            className="cta-button upgrade-button"
            onClick={handleCheckout}
            disabled={isPro || loading}
          >
            {isPro
              ? "Already Pro ✅"
              : loading
                ? "Processing..."
                : "Upgrade to Pro"}
          </button>

          <ul className="features-list">
            <li>🤖 Botvice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
