import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

export function PrivateRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();
  console.log("In private route");
  return token ? children : <Navigate to="/login" state={{ from: location?.pathname }} replace />;
}
