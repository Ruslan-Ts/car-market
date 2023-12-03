import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPageLimit,
} from 'redux/selectors';
import Loader from '../../components/Loader';
import CarItem from 'components/CarsItem/CarItem';
import Filter from 'components/Filter/Filter';
import { BtnWrapper, Button, List } from './Cars.styled';
import { nextPage, resetPage } from 'redux/carsSlice';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageLimit = useSelector(selectPageLimit);

  useEffect(() => {
    dispatch(fetchCars(pageLimit));
  }, [dispatch, pageLimit]);

  useEffect(() => {
    dispatch(resetPage());
  }, [dispatch]);

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
      <BtnWrapper>
        {cars.length % pageLimit === 0 && (
          <Button onClick={() => dispatch(nextPage())}>Load more</Button>
        )}
      </BtnWrapper>
    </div>
  );
};

export default Cars;
