import { NavLink } from 'react-router-dom';
// import { RiHomeHeartLine } from "react-icons/ri";
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
        <NavLink className={css.link} to="/" end>
        {/* <RiHomeHeartLine size={32} className={css.icon} /> */}
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;