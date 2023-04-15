import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'Redux/Contacts/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Contacts/Operations';
import { toast } from 'react-hot-toast';
import { NavLink, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) {
      return;
    }
    toast(error);
  }, [error]);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <nav>
          <NavLink to="/contacts">Контакты</NavLink>
          <NavLink to="/register">Регистрация</NavLink>
          <NavLink to="/login">Войти</NavLink>
        </nav>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
