import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffff;
  padding: 10;
  border-radius: 24px;
  transition: opacity 0.3s;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 30;
  }
  @media screen and (min-width: 1440px) {
    width: 541px;
    padding: 40px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  background-color: transparent;
  width: 24px;
  height: 24px;
  color: black;
  fill: black;
  right: 0;
  top: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
`;

export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 4px;
  transition: background-color #3470ff;
  z-index: 99999999;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 12px;
  position: relative;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  background-size: auto;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    cursor: auto;
  }
`;

export const TitleContainer = styled.ul`
  display: flex;
  margin-top: 14px;
  margin-bottom: 8px;
  margin-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  list-style: none;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const CharContainer = styled.ul`
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  line-height: 28px;
  font-style: normal;
  font-weight: 400;
  color: #12141780;
  white-space: nowrap;
  overflow: hidden;
`;

export const AccContainer = styled.ul`
  margin-top: 4px;
  font-size: 12px;
  line-height: 28px;
  font-style: normal;
  font-weight: 400;
  color: #12141780;
  white-space: nowrap;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: 14px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  color: #121417;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  margin-top: 24px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
`;

export const TextBox = styled.h2`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  font-size: 12px;
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  color: #121417;
`;
export const Button = styled.a`
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #3470ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 0;
  width: 168px;
  margin-top: 28px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
  }
`;
