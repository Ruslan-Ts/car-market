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

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch]);

  console.log(cars);
  return (
    <>
      {isLoading && !error && <Loader />}
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <div>{car.make}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cars;
