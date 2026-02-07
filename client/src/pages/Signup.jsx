import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse same styles

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("REGISTER DATA:", formData);
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
            />

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

            <button type="submit">Register</button>
          </form>

          <p className="register-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

