import React from "react";
import "./Workspace.css";
import Navbar from "../components/Navbar";

function Workspace() {
  const teamMembers = [
    { name: "Alice Chen", role: "Founder & CEO", email: "alice@example.com" },
    { name: "Bob Smith", role: "CTO", email: "bob@example.com" },
    { name: "Carol Williams", role: "Product Designer", email: "carol@example.com" },
  ];

  return (
    <>
      <Navbar />
      <div className="workspace-content">
        {/* Header */}
        <div className="workspace-header">
          <h2>Startup Profile & Workspace</h2>
          <p>Manage your startup details and team.</p>
        </div>

        {/* Startup Details */}
        <div className="card">
          <h3>Startup Details</h3>

          <form className="form">
            <div className="form-grid">
              <div className="form-group">
                <label>Startup Name</label>
                <input type="text" defaultValue="Techpreneur" />
              </div>

              <div className="form-group">
                <label>Industry</label>
                <input type="text" defaultValue="SaaS / EdTech" />
              </div>
            </div>

            <div className="form-group">
              <label>Vision Statement</label>
              <textarea
                rows="3"
                defaultValue="To empower early-stage founders with the tools they need to succeed."
              />
            </div>

            <div className="form-actions" style={{ justifyContent: "flex-start" }}>
              <button type="button" className="primary-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Team Members */}
        <div className="card">
          <h3>Team Members</h3>

          <div className="team-list">
            {teamMembers.map((member) => (
              <div className="team-item" key={member.email}>
                <div className="team-left">
                  <div className="avatar">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="team-name">{member.name}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
                <span className="team-email">{member.email}</span>
              </div>
            ))}

            <button className="add-member-btn" style={{ alignSelf: "flex-start" }}>
              + Add Team Member
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workspace;