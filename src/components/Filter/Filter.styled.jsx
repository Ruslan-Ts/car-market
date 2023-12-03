import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 8px 14px;
  border-radius: 12px;
  background-color: #3470ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  width: 136px;

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
