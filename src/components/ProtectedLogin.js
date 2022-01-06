import { Navigate } from "react-router-dom";

export default function ProtectedLogin({ children }) {
  
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Navigate to="/" /> : children;
}