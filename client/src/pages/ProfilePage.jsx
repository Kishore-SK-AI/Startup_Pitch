import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import WorkedOn from "../components/WorkedOn";
import "./ProfilePage.css";

export default function ProfilePage() {
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
      </div>
    </>
  );
}
