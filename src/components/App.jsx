import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout.jsx'));
const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Cars = lazy(() => import('../pages/Cars/Cars.jsx'));
const Favorites = lazy(() => import('pages/Favorites/Favorites.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Cars />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
