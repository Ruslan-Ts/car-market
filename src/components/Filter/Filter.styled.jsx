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

  margin-left: 18px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
  }
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-style: normal;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 224px;
  border-radius: 12px;
  font-size: 12px;
  background: #f7f7fb;
  width: 100%;
  border: 0;
  padding: 8px 14px;
`;
