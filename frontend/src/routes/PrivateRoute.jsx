import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (token && token.length > 0) return children;
  else return <Navigate to={"/login"} />;
};

export default PrivateRoute;
