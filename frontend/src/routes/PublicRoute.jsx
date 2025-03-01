import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (token && token.length > 0) return <Navigate to={"/dashboard"} />;
  else return children;
};

export default PublicRoute;
