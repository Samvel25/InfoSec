import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, path }) => {
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");

  return userRole === "admin" ? (
    // <Route path={path}>{children}</Route>
    <Navigate to={path} state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
