import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
} from 'redux/selectors';
import Loader from '../../components/Loader';
import CarItem from 'components/CarsItem/CarItem';
import Filter from 'components/Filter/Filter';
import { List } from './Cars.styled';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <div className="container">
      {isLoading && !error && <Loader />}
      {error && <p>{error.message}</p>}
      <Filter />
      <List>
        {cars.map(car => (
          <li key={car.id}>
            <CarItem car={car} />
          </li>
        ))}
      </List>
      <button type="button">Load more</button>
    </div>
  );
};

export default Cars;
