import CarItem from 'components/CarsItem/CarItem';
import Loader from 'components/Loader';
import { List } from 'pages/Cars/Cars.styled';
import { useSelector } from 'react-redux';
import { selectError, selectFavorites, selectIsLoading } from 'redux/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div className="container">
        {isLoading && !error && <Loader />}
        {error && <p>{error.message}</p>}
        <List>
          {favorites.map(car => (
            <li key={car.id}>
              <CarItem car={car} />
            </li>
          ))}
        </List>
      </div>
    </>
  );
};

export default Favorites;
