

export default function ProfileSidebar({user}) {
  return (
    <div className="sidebar">
      <div className="avatar-large">{user.username.charAt(0).toUpperCase()}</div>
      <h2>{user.username}</h2>
    
      <button>Manage account</button>

      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        <p><b>Job:</b> Full Stack Developer</p>
        <p><b>Organization:</b> TechNova Solutions</p>
        <p><b>Location:</b> Chennai</p>
      </div>
    </div>
  );
}
