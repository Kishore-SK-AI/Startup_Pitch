import React from "react";
import Navbar from "../components/Navbar";
import { Plus } from "lucide-react";
import api from "../config/axios";
import { useState, useEffect } from "react";
import "./Tasks.css";

const tasks = [
  { id: 1, title: "Design Landing Page", status: "In Progress", priority: "High" },
  { id: 2, title: "Setup Database", status: "Done", priority: "High" },
  { id: 3, title: "User Interviews", status: "ToDo", priority: "Medium" },
  { id: 4, title: "Create Pitch Deck", status: "ToDo", priority: "High" },
  { id: 5, title: "Configure Analytics", status: "In Progress", priority: "Low" },
];

function Tasks() {
  const statuses = ["ToDo", "In Progress", "Done"];
  const [user, setUser] = useState(null);
        
          // Fetch user
          useEffect(() => {
            const fetchUser = async () => {
              try {
                const userId = localStorage.getItem("userId");
        
                if (!userId) {
                  console.error("No userId found");
                  return;
                }
        
                const res = await api.get(`/user/${userId}`);
        
                setUser(res.data.data);
              } catch (err) {
                console.error("Fetch user error:", err);
              }
            };
        
            fetchUser();
          }, []);

  return (
    <>
      <Navbar user={user} />
      <div className="tasks">
        {/* Header */}
        <div className="tasks-header">
          <div>
            <h2>Task & Milestone Tracking</h2>
            <p>Manage your execution flow.</p>
          </div>

          <button className="new-task-btn">
            <Plus size={18} />
            New Task
          </button>
        </div>

        {/* Board */}
        <div className="task-board">
          {statuses.map((status) => (
            <div className="task-column" key={status}>
              <div className="column-header">
                <h3>{status}</h3>
                <span className="count">
                  {tasks.filter((t) => t.status === status).length}
                </span>
              </div>

              <div className="task-list">
                {tasks
                  .filter((t) => t.status === status)
                  .map((task) => (
                    <div className="task-card" key={task.id}>
                      <h4>{task.title}</h4>
                      <span
                        className={`priority ${task.priority.toLowerCase()}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;