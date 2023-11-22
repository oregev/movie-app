import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components';

export const PageLayout = (): JSX.Element => (
  <div>
    <AppHeader />
    <Outlet />
  </div>
);
