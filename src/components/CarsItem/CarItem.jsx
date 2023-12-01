const CarItem = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrise,
    address,
    rentalCompany,
    engineSize,
    type,
    mileage,
    functionalities,
    accessories,
    fuelConsumption,
  } = car;

  console.log(car.id);
  return (
    <div>
      <img src={img} alt={make} />
      <ul>
        <li>
          <div>{make}</div>
          <div>{model}</div>
          <div>{year}</div>
        </li>
        <li>{rentalPrise}</li>
      </ul>
      <ul>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>Premium</li>
      </ul>
      <ul>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage / 1000}</li>
        <li>{functionalities[0]}</li>
      </ul>
      <button type="button">Learn more</button>
    </div>
  );
};

export default CarItem;
