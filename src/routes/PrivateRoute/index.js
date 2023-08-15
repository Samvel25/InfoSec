import { Navigate, Route, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, path }) => {
  const location = useLocation();
  const user = useAuth((state) => state.user);

  return user?.role === 'admin' ? (
    <Navigate to={path} state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
