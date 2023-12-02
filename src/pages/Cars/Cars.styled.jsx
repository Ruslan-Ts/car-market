import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
