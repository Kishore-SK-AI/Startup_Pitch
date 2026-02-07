import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import ProtectedRoute from "./config/protectedRoute";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/workspace" element={<Workspace />} />

{/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["founder", "member"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRoles={["founder", "member"]}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
