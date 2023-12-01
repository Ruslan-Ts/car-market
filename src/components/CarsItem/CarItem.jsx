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
      <img src={img} alt="" />
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
        <li>Premium</li>
        <li>{year}</li>
        <li>{rentalPrise}</li>
      </ul>
    </div>
  );
};

export default CarItem;
