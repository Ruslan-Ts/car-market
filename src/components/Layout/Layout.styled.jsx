import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 40px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3470ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #0b44cd;
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  &:active {
    color: black;
  }
`;

export const PageBox = styled.div`
  min-height: 100vh;

  background-color: #e0eafb;
`;

export const Header = styled.header`
  margin: 0px;
  padding: 0px;
`;
