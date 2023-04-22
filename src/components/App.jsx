import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'Redux/Contacts/Selectors';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Layout from './Layuot/Layout';
import { refreshUser } from 'Redux/Auth/Operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import RestrictedRoute from './RestrictedRoute';

// import { SelectIsRefreshing } from 'Redux/Auth/Selectors';

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  // const { isRefreshing } = SelectIsRefreshing();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!error) {
      return;
    }
    toast(error);
  }, [error]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="contacts" element={<Contacts />} /> */}
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        {/* <Route path="login" element={<Login />} /> */}
      </Route>
    </Routes>
  );
};
