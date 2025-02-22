import { Navigate, Outlet } from "react-router-dom";

export default function Auth() {
  const user = JSON.parse(sessionStorage.getItem("user") || "null"); // Check if user exists in localStorage

  return user ? <Outlet /> : <Navigate to="/" replace />;
}
