import React from "react";
import "./Validation.css";
import Navbar from "../components/Navbar"; // added: import the Navbar component

// Inline replacement for lucide-react's MessageSquare to avoid unresolved import
const MessageSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

function Validation() {
  const items = [
    {
      title: "Pricing Model Feedback",
      type: "Survey",
      responses: 45,
      sentiment: "Positive",
    },
    {
      title: "Beta User Interview",
      type: "Interview",
      responses: 12,
      sentiment: "Neutral",
    },
    {
      title: "Landing Page A/B Test",
      type: "Experiment",
      responses: 120,
      sentiment: "Positive",
    },
    {
      title: "Feature Request: Dark Mode",
      type: "User Feedback",
      responses: 8,
      sentiment: "Neutral",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="validation">
       {/* added: render Navbar above validation content */}

      {/* Header */}
      <div className="validation-header">
        <h2>Feedback & Validation</h2>
        <p>Validate ideas through structured feedback.</p>
      </div>

      {/* Cards */}
      <div className="validation-grid">
        {items.map((item) => (
          <div className="validation-card" key={item.title}>
            <div className="card-top">
              <div>
                <h3>{item.title}</h3>
                <span className="badge">{item.type}</span>
              </div>

              <div className="card-meta">
                <div className="responses">
                  <MessageSquare size={16} />
                  {item.responses}
                </div>
                <span
                  className={`sentiment ${
                    item.sentiment === "Positive"
                      ? "positive"
                      : "neutral"
                  }`}
                >
                  {item.sentiment}
                </span>
              </div>
            </div>

            <div className="card-footer">
              <button className="view-btn">View Results</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Validation;