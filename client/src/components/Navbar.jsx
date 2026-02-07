import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  // Get first letter of username
  const firstLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="navbar">

      <div className="nav-left">
        <span className="brand">StartupOps</span>

        <span
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/workspace")}
        >
          Workspace
        </span>

        <span className="nav-item">Tasks</span>

        <span
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          Analytics
        </span>

        <span className="nav-item">Validation</span>
      </div>

      <div className="nav-right">


        {/* Avatar */}
        <div
          className="avatar-small"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          {firstLetter}
        </div>
        <span className="role">{user?.role || "User"}</span>

      </div>
    </div>
  );
}