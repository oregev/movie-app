import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from '../layout';
import { Favorites, Movie, NotFound } from '../pages';

export const AppRouter = (): JSX.Element => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Navigate to="/movie" replace={true} />} />
        <Route path="movie" element={<Movie />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
