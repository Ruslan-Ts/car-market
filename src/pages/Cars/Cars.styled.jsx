import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 1240px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;

export const Button = styled.button`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #3470ff;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  margin-top: 85px;
  margin-bottom: 50px;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
