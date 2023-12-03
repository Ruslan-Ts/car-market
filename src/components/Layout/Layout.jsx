import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink } from './Layout.styled';
import Loader from 'components/Loader';
import { NavContainer, PageBox } from './Layout.styled';
import { useDispatch } from 'react-redux';
import { resetPage } from 'redux/carsSlice';

const Layout = () => {
  const dispatch = useDispatch();
  return (
    <body>
      <PageBox>
        <header>
          <NavContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink onClick={() => dispatch(resetPage())} to="/catalog">
              All Cars
            </StyledLink>
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
