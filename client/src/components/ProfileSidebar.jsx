export default function ProfileSidebar() {
  return (
    <div className="sidebar">
      <div className="avatar-large">S</div>
      <h2>Sam Lee</h2>

      <button>Manage account</button>

      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        <p><b>Job:</b> </p>
        <p><b>Organization:</b> </p>
        <p><b>Location:</b> </p>
      </div>
    </div>
  );
}
