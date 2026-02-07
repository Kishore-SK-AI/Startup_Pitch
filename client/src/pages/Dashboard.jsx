import React from "react";
import './Dashboard.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "./Dashboard.css";

const data = [
  { name: "Jan", tasks: 4, validation: 24 },
  { name: "Feb", tasks: 3, validation: 13 },
  { name: "Mar", tasks: 20, validation: 98 },
  { name: "Apr", tasks: 27, validation: 39 },
  { name: "May", tasks: 18, validation: 48 },
  { name: "Jun", tasks: 23, validation: 38 },
  { name: "Jul", tasks: 34, validation: 43 },
];

const stats = [
  { label: "Total Tasks", value: "124", icon: CheckCircle, color: "blue" },
  { label: "Team Members", value: "8", icon: Users, color: "purple" },
  { label: "Validation Score", value: "85%", icon: TrendingUp, color: "green" },
  { label: "Pending Issues", value: "12", icon: AlertCircle, color: "red" },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Analytics Dashboard</h2>
        <p>Overview of your startup's progress and health.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div className="stat-card" key={stat.label}>
              <div className="stat-text">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
              <div className={`stat-icon ${stat.color}`}>
                <Icon size={22} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Task Completion Trends</h3>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#2563eb"
                  fill="#e0f2fe"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3>Validation Metrics</h3>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="validation"
                  fill="#8b5cf6"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;