import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading } = useUser();
  const isAuthenticated = true;

  const navigate = useNavigate();
  console.log(isLoading);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
