import styled from 'styled-components';

export const Container = styled.div`
  max-width: 274px;
  gap: 50px;
  margin-top: 30px;
`;

export const ImageContainer = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 12px;
  position: relative;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  background-size: cover;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    cursor: auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  margin-right: 6px;
  white-space: nowrap;
  overflow: hidden;
`;

export const CharContainer = styled.ul`
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #12141780;
  white-space: nowrap;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #3470ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  width: 100%;
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

export const FavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  width: 14px;
  height: 14px;
  background-color: transparent;
`;
