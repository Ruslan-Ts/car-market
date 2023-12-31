import { useContext } from 'react';
import { ModalContext } from 'components/ModalContext';
import {
  Button,
  ButtonClose,
  CharContainer,
  HoverCloseBtn,
  Image,
  ImageContainer,
  ModalWrapper,
  TextBox,
  TextContainer,
  Title,
  TitleContainer,
} from './LearnMoreModal.styled';

const LearnMoreModal = ({ car }) => {
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
    description,
    accessories,
    rentalConditions,
  } = car;

  const toggleModal = useContext(ModalContext);

  const handleClose = () => {
    toggleModal();
  };

  return (
    <ModalWrapper>
      <ButtonClose onClick={handleClose}>
        <HoverCloseBtn>
          <svg width="24" height="24">
            <use href="../../img/close.svg"></use>
          </svg>
        </HoverCloseBtn>
      </ButtonClose>
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
      <TextContainer>{description}</TextContainer>
      <Title>Accessories and functionalities:</Title>
      <CharContainer>
        <li>&nbsp;{accessories[0]}&nbsp;|</li>
        <li>&nbsp;{accessories[1]}&nbsp;|</li>
        <li>&nbsp;{accessories[2]}</li>
      </CharContainer>
      <CharContainer>
        <li>&nbsp;{functionalities[0]}&nbsp;|</li>
        <li>&nbsp;{functionalities[1]}&nbsp;|</li>
        <li>&nbsp;{functionalities[2]}</li>
      </CharContainer>
      <Title>Rental Conditions:</Title>
      <CharContainer>
        <TextBox>{rentalConditions.split('/')[0]}</TextBox>
        <TextBox>{rentalConditions.split('/')[1]}</TextBox>
      </CharContainer>
      <CharContainer>
        <TextBox>{rentalConditions.split('/')[2]}</TextBox>
        <TextBox>
          Mileage:&nbsp;<span style={{ color: '#3470FF' }}>{mileage}</span>
        </TextBox>
        <TextBox>
          Price:&nbsp;<span style={{ color: '#3470FF' }}>{rentalPrice}</span>
        </TextBox>
      </CharContainer>
      <Button href="tel:+380730000000">Rental car</Button>
    </ModalWrapper>
  );
};

export default LearnMoreModal;
