import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div>
       <Helmet>
        <title>NotFound</title>
      </Helmet>
      <p>The page was not found!</p>
    </div>
  );
};

export default NotFoundPage;