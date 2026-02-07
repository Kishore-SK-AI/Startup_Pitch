export default function WorkedOn() {
  const items = [
    
  ];

  return (
    <div className="card">
      <div className="card-title">Worked on</div>

      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{item}</strong>
          <div style={{ fontSize: "12px", color: "#6b778c" }}>
            Created today
          </div>
        </div>
      ))}
    </div>
  );
}
