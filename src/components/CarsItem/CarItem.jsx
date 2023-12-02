import {
  CharContainer,
  Container,
  Image,
  ImageContainer,
  TitleContainer,
  Button,
} from './CarItem.styled';

const CarItem = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  return (
    <div>
      <Container>
        <ImageContainer
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
        >
          {!img ? (
            <Image
              src="https://hagerty-pagebuilder.imgix.net/6hYowaOttDoLKt9f0lHVCb/8afbed915e0b224f6140abe55283b9de/1929-Ford_Woodie_Wagon-WID-JLewis-0004.jpg?ixlib=js-3.5.1&max-w=640&auto=format%2Ccompress&w=1280&s=04990f0e82e05b7705f72ea770f4ab5d"
              alt={make}
            />
          ) : null}
        </ImageContainer>
        <TitleContainer>
          <div
            style={{
              display: 'flex',
              marginRight: '5px',
            }}
          >
            {make},&nbsp;
            <span style={{ color: '#3470FF' }}>{model}&nbsp;</span>
            {year}
          </div>
          <li>{rentalPrice}</li>
        </TitleContainer>
        <CharContainer>
          <li>{address.split(',')[1]}&nbsp;|</li>
          <li>&nbsp;{address.split(',')[2]}&nbsp;|</li>
          <li>&nbsp;{rentalCompany}&nbsp;|</li>
          <li>&nbsp;Premium</li>
        </CharContainer>
        <CharContainer>
          <li>{type}&nbsp;|</li>
          <li>&nbsp;{model}&nbsp;|</li>
          <li>&nbsp;{mileage / 1000}&nbsp;|</li>
          <li>&nbsp;{functionalities[0]}</li>
        </CharContainer>
        <Button>Learn more</Button>
      </Container>
    </div>
  );
};

export default CarItem;
