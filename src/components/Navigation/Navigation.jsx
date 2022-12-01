import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" end
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts"
        className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;