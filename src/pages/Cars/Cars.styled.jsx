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
