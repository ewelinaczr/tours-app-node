import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../features/Login/loginHooks/useUser.tsx";
import Spinner from "../ui/Spinner.tsx";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user && !isLoading) {
        navigate("/login");
      }
    },
    [user, isLoading, navigate]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }
}

export default ProtectedRoute;
