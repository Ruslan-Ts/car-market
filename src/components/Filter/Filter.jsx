import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

const Filter = () => {
  const cars = useSelector(selectCars);
  return (
    <div>
      <form>
        <label for="fav">Car brand</label>
        <input list="browsers" name="fav" id="fav" />

        <datalist id="browsers">
          {cars.map(car => (
            <option>{car.make}</option>
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
