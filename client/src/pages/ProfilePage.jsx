import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import WorkedOn from "../components/WorkedOn";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import "./ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    // Clear the token cookie
    const res = await api.get('auth/logout');
    console.log(res.data);
    // Clear localStorage
    localStorage.removeItem("jwt");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    // Redirect to login page
    navigate("/login");
  }
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>

        <div className="profile-main">
          <ProfileSidebar />

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

        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
