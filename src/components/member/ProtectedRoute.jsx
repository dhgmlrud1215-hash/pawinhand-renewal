import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { member, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!member) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
