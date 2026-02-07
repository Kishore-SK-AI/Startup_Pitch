import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import backgroundImg from "../assets/background.avif";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">StartupOps</h1>
        </div>

        <div className="navbar-right">
          <button
            className="nav-button outline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="nav-button primary"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Powering <span>Modern Startups</span>
          </h2>
          <p>
            Manage tasks, validate ideas, collect feedback, and track analytics —
            all in one powerful platform built for founders.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={backgroundImg}
            alt="Startup illustration"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;