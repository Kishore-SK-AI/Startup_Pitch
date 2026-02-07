import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.role || !formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    
    try {
      const result = await api.post("/auth/login", formData);
      
      if(result.data.success || result.status === 200){
        console.log("LOGIN SUCCESS:", result.data);
        
        // Store auth data in localStorage
        localStorage.setItem("jwt", result.data.token || result.data.jwt);
        localStorage.setItem("userId", result.data.userId);
        localStorage.setItem("userRole", formData.role);
        
        toast.success("Login successful!");
        console.log("Navigating to dashboard...");
        navigate("/dashboard");
      }
      else{
        toast.error(result.data.message || "Login failed");
        console.error("LOGIN FAILED:", result.data.message);
      }
    }
    catch(error){
      console.error("LOGIN ERROR:", error);
      const errorMessage = error.response?.data?.message || error.message || "Login failed. Please try again.";
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
          <h1>LOGIN</h1>
          <h2>STARTUPOPS</h2>
          <h3>PORTAL!!!</h3>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Login Account</h2>

          <form onSubmit={handleLogin}>
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="register-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
