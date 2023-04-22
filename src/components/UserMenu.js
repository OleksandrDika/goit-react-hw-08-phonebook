import { useDispatch, useSelector } from 'react-redux';
import { User, UserButton } from './Layuot/Layut.styled';
import { SelectUser } from 'Redux/Auth/Selectors';
import { logout } from 'Redux/Auth/Operations';

export const UserMenu = () => {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <User>
      <p>Welcome, {user.name}</p>
      <UserButton type="button" onClick={handleLogout}>
        Log out
      </UserButton>
    </User>
  );
};
