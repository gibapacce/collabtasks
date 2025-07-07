import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

export function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
