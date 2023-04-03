import { Navigate } from 'react-router-dom';
import { useIsUserAuth } from 'redux/useIsUserAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
  const isUserAuth = useIsUserAuth();

  return isUserAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
