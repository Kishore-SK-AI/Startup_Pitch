import React from 'react';
import './Pricing.css';

const Pricing = () => {
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
          
          <button className="cta-button current-plan" disabled>Your current plan</button>
          
          <ul className="features-list">
            <li><span className="icon">✨</span> Get simple explanations</li>
            <li><span className="icon">💬</span> Have short chats for common questions</li>
            <li><span className="icon">🖼️</span> Try out image generation</li>
            <li><span className="icon">ℹ️</span> Save limited memory and context</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="card pro-card">
          <h2 className="plan-name">Pro</h2>
          <div className="price-container">
            <span className="currency">₹</span>
            <span className="price">19,900</span>
            <span className="period">INR / month (inclusive of GST)</span>
          </div>
          <p className="description">Maximize your productivity</p>
          
          <button className="cta-button upgrade-button">Upgrade to Pro</button>
          
          <ul className="features-list">
            <li><span className="icon">🤖</span> Botvice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;