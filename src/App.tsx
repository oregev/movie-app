import { QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './navigation';
import { queryClient } from './api';
import { AppContextProvider } from './AppContext';

export const App = (): JSX.Element => (
  <AppContextProvider>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </AppContextProvider>
);
