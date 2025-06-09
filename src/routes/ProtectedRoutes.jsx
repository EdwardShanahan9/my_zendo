import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/User/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
