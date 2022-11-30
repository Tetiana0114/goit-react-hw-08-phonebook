import { Helmet } from 'react-helmet';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
       <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <h1 className={css.title}>
        Welcome to PhoneBook!
      </h1>
    </div>
  );
};

export default Home;