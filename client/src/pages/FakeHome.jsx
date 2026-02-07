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
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <button
        className="upgrade-btn"
        style={{ position: "absolute", top: 32, right: 32 }}
        onClick={() => navigate("/package")}
      >
        Upgrade to Pro
      </button>

      <div className="fakehome-content" style={{ textAlign: "center", color: "#fff", marginBottom: 48 }}>
        <h1>Welcome to StartupOps</h1>
        <p>Unlock premium features and get started on your journey!</p>
      </div>

      <button
        className="getstarted-btn"
        style={{ display: "flex", alignItems: "center", fontSize: 18, padding: "12px 32px", borderRadius: 8, background: "#2563eb", color: "#fff", border: "none", cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        Get Started <ArrowRight style={{ marginLeft: 8 }} />
      </button>
    </div>
  );
}
