import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="brand">StartupOps</span>
        <span className="nav-item" style={{ cursor: "pointer" }} onClick={() => navigate("/workspace")}>
          Workspace
        </span>
        <span className="nav-item">Tasks</span>
        <span className="nav-item" style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
          Analytics
        </span>
        <span className="nav-item">Validation</span>
      </div>

      <div className="nav-right">
        <span className="role">Founder</span>
        <div
          className="avatar-small"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          S
        </div>
      </div>
    </div>
  );
}
