import { SelectIsLoggedIn } from 'Redux/Auth/Selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(SelectIsLoggedIn);
//   console.log(isLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
// };

// export default RestrictedRoute;

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
