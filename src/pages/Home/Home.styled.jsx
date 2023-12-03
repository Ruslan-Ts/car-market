import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #3470ff;
  color: #fff;
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    color: #333;
  }

  p {
    line-height: 1.5;
  }

  ul,
  ol {
    padding-left: 20px;
    line-height: 1.5;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;

  a {
    color: #fff;
    text-decoration: underline;
  }
`;
