export default function WorkedOn() {
  const items = [
  "AI Startup Pitch Advisor",
  "User Authentication Module",
  "Dashboard Analytics System",
  "Pitch Validation Feature",
  "Team Collaboration Workspace",
  "Investor Feedback Integration",
];


  return (
    <div className="card">
      <div className="card-title">Worked on</div>

      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{item}</strong>
          <div style={{ fontSize: "12px", color: "#6b778c" }}>
            created on {new Date().toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}
