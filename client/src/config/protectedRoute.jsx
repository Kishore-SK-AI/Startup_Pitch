import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Get token from localStorage
  const token = localStorage.getItem("jwt");
  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");

  // Check if user is authenticated
  if (!token || !userId) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has the required role
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on role
    if (userRole === "founder" || userRole === "member") {
      return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  // User is authenticated and has the required role
  return children;
};

export default ProtectedRoute;
