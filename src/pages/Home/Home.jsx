import { useState } from 'react';
import Loader from 'components/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Oops... Something went wrong...</p>}
    </>
  );
};

export default Home;
