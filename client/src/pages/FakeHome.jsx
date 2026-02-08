import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/background.avif";
import { ArrowRight } from "lucide-react";

import "./FakeHome.css";

export default function FakeHome() {
  const navigate = useNavigate();

  

  return (
    <div
      className="fakehome-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      {/* Upgrade Button */}
      <button
        className="upgrade-btn"
        onClick={() => navigate("/package")}
      >
        Upgrade to Pro
      </button>

      {/* Content */}
      <div className="fakehome-content">
        <h1>Welcome to StartupOps</h1>
        <p>Unlock premium features and get started on your journey!</p>
      </div>

      {/* Get Started Button */}
      <button
        className="getstarted-btn"
        onClick={() => navigate("/dashboard")}
      >
        Get Started <ArrowRight size={20} />
      </button>
    </div>
  );
}
