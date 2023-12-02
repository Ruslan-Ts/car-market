const CarItem = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrise,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  return (
    <div>
      <img
        src={
          img
            ? img
            : 'https://hagerty-pagebuilder.imgix.net/6hYowaOttDoLKt9f0lHVCb/8afbed915e0b224f6140abe55283b9de/1929-Ford_Woodie_Wagon-WID-JLewis-0004.jpg?ixlib=js-3.5.1&max-w=640&auto=format%2Ccompress&w=1280&s=04990f0e82e05b7705f72ea770f4ab5d'
        }
        alt={make}
      />
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
