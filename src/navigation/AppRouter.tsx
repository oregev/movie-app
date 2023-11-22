import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { PageLayout } from '../layout';
import { Favorites, Movie, NotFound } from '../pages';

export const AppRouter = (): JSX.Element => (
  <HashRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Movie />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);
