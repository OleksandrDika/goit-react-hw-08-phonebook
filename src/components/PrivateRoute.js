import { SelectIsLoggedIn, SelectIsRefreshing } from 'Redux/Auth/Selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  const isLoggedIn = useSelector(SelectIsLoggedIn);
  const isRefreshing = useSelector(SelectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
