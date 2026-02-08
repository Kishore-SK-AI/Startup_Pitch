import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import WorkedOn from "../components/WorkedOn";

import { useNavigate } from "react-router-dom";
import api from "../config/axios";

import "./ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          console.error("No userId found");
          return;
        }

        const res = await api.get(`/user/${userId}`);

        setUser(res.data.data);
        setLoading(false);

      } catch (err) {
        console.error("Fetch user error:", err);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");

      localStorage.removeItem("jwt");     // ✅ fixed
      localStorage.removeItem("userRole");
      localStorage.removeItem("userId");
      localStorage.removeItem("isPro");

      navigate("/login");

    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>User not found</p>;

  return (
    <>
      <Navbar user={user} />

      <div className="container">

        <div className="profile-header">
          <h1>Profile</h1>
        </div>

        <div className="profile-main">

          <ProfileSidebar user={user} />

          <div>

            <WorkedOn />

            <div className="card">
              <div className="card-title">Places you work in</div>
              <p>StartupOps – Product Workspace</p>
            </div>

            <div className="card">
              <div className="card-title">Works with</div>
              <p>Collaborators</p>
            </div>

          </div>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </>
  );
}
