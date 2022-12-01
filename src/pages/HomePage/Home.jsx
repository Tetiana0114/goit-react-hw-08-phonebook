import { Helmet } from 'react-helmet';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
       <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <h1 className={css.title}>
      "PhoneBook"
      </h1>
      <p className={css.text}>Welcome to the application for storing personal contacts!
        To get started, select the registration menu item.
        If you already have an account, go to the login page.
      </p>
    </div>
  );
};

export default Home;