import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectStatusFilter } from 'redux/selectors';
import { Button, Container, Input, Label } from './Filter.styled';
import { setStatusFilter } from 'redux/filterSlice';

const Filter = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <Container>
      <form>
        <Label for="fav">Car brand</Label>
        <Container>
          <Input
            placeholder="Enter the text"
            list="cars"
            name="cars"
            id="fav"
            value={filter}
            onChange={onFilter}
          />

          <datalist id="cars">
            {cars.map(car => (
              <option key={car.id}>{car.make}</option>
            ))}
          </datalist>
          <Button type="submit">Search</Button>
        </Container>
      </form>
    </Container>
  );
};

export default Filter;
