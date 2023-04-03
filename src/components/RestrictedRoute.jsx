import { Navigate } from 'react-router-dom';
import { useIsUserAuth } from 'redux/useIsUserAuth';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isUserAuth = useIsUserAuth();

  return isUserAuth ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
