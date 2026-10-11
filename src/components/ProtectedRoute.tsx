import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, checking } = useAuth();

  if (checking === true) {
    return <Loading />;
  }

  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;