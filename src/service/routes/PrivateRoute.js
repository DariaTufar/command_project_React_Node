import { Navigate } from 'react-router-dom';
import { useIsUserAuth } from 'redux/useIsUserAuth';
// ! No NEED TO USE THIS COMPONENT !!!!
// USE TO PRIVATE ROUTES RequireAuth COMPONENT !!!!!!

export const PrivateRoute = ({ 
  component: Component, 
  redirectTo = '/welcome' 
}) => {
  const isLogin = useIsUserAuth();

  return isLogin ? Component : <Navigate to={redirectTo} />;
};
