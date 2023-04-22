import { NavLink, Outlet } from 'react-router-dom';
import { Header, Nav, Title } from './Layut.styled';
import { SelectIsLoggedIn } from 'Redux/Auth/Selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);
  return (
    <div>
      <Header>
        <Title>Phonebook</Title>
        <Nav>
          {isLoggedIn && <NavLink to="/contacts">My contacts</NavLink>}
          {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
          {!isLoggedIn && <NavLink to="/login">Sign in</NavLink>}
        </Nav>
        {isLoggedIn && <UserMenu />}
      </Header>

      <Outlet />
    </div>
  );
};

export default Layout;
