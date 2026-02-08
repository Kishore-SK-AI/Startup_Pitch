import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import ProtectedRoute from "./config/protectedRoute";
import Validation from "./pages/Validation";
import Tasks from "./pages/Tasks";
import FakeHome from "./pages/FakeHome";
import Package from "./pages/Package";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/fakehome" element={<FakeHome />} />
      <Route path="/package" element={<Package />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      {/* Protected Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;