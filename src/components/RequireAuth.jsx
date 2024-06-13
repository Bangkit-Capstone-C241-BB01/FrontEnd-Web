// src/components/RequireAuth.js
import React from "react";
import { Navigate } from "react-router-dom";
import { getTokenCustomer, getTokenSeller, getTokenAdmin } from "../utils/cookies";

const RequireAuth = ({ children, role }) => {
  let token;
  let loginPath;

  switch (role) {
    case "customer":
      token = getTokenCustomer();
      loginPath = "/login";
      break;
    case "seller":
      token = getTokenSeller();
      loginPath = "/seller/login";
      break;
    case "admin":
      token = getTokenAdmin();
      loginPath = "/admin";
      break;
    default:
      throw new Error("Invalid role");
  }

  if (!token) {
    return <Navigate to={loginPath} replace />;
  }

  return children;
};

export default RequireAuth;
