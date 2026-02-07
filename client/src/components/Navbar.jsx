export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="brand">StartupOps</span>
        <span className="nav-item">Tasks & Milestones</span>
        <span className="nav-item">Feedback & Validation</span>
        <span className="nav-item">Analytics</span>
      </div>

      <div className="nav-right">
        <span className="role">Founder</span>
        <div className="avatar-small">S</div>
      </div>
    </div>
  );
}
