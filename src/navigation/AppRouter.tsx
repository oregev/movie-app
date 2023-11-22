import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layout';
import { Favorites, Movie, NotFound } from '../pages';

export const AppRouter = (): JSX.Element => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Movie />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
