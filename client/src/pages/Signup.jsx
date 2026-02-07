import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/axios";
import "./Login.css"; 

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.username || !formData.role || !formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    
    try {
      const result = await api.post("/auth/register", formData);
      
      if (result.data.success || result.status === 201) {
        console.log("REGISTER SUCCESS:", result.data);
        
        // Store auth data in localStorage
        localStorage.setItem("jwt", result.data.token || result.data.jwt);
        localStorage.setItem("userId", result.data.userId);
        localStorage.setItem("userRole", formData.role);
        
        toast.success("Registration successful!");
        console.log("Navigating to dashboard...");
        navigate("/login");
      } else {
        toast.error(result.data.message || "Registration failed");
        console.error("REGISTER FAILED:", result.data.message);
      }
    }
    catch(error){
      console.error("REGISTER ERROR:", error);
      const errorMessage = error.response?.data?.message || error.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* LEFT PANEL */}
        <div className="login-left">
          <h1>REGISTER</h1>
          <h2>STARTUPOPS</h2>
          <h3>PORTAL!!!</h3>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>
            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              required
            />

            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={loading}
              required
            >
              <option value="">Select Role</option>
              <option value="founder">Founder</option>
              <option value="member">Member</option>
            </select>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="register-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#007bff" }}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

