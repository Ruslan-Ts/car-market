import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink } from './Layout.styled';
import Loader from 'components/Loader';
import { NavContainer, PageBox } from './Layout.styled';

const Layout = () => {
  return (
    <body>
      <PageBox>
        <header>
          <NavContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/cars">All Cars</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </NavContainer>
        </header>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageBox>
    </body>
  );
};

export default Layout;
