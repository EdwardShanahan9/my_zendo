import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/User/UserContext";

const PublicRoute = ({ children }) => {
  const { user } = useUser();
  return !user ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
