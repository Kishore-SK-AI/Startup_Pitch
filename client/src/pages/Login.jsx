import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA:", formData);

    if (formData.email && formData.password) {
      navigate("/Dashboard");
    } else {
      alert("Please enter email and password");
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
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">Login</button>
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
