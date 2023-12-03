import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectStatusFilter } from 'redux/selectors';
import { Button, Container } from './Filter.styled';

const Filter = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  return (
    <Container>
      <form>
        <label for="fav">Car brand</label>
        <div>
          <input
            placeholder="Enter the text"
            list="cars"
            name="cars"
            id="fav"
          />

          <datalist id="cars">
            {cars.map(car => (
              <option key={car.id}>{car.make}</option>
            ))}
          </datalist>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </Container>
  );
};

export default Filter;
