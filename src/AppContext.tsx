import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IMovie } from './pages/movie/components/movieDetails';

interface AppContextObj {
  favorites?: IMovie[];
  setFavorites: Dispatch<SetStateAction<IMovie[]>>;
  addToFavorites: (movie: IMovie) => void;
  removeFromFavorites: (id: string) => void;
  getIsFavorite: (id: string) => boolean;
}

export const AppContext = createContext({} as AppContextObj);

export const AppContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  const addToFavorites = useCallback((movie: IMovie): void => {
    setFavorites((prev) => [...prev, movie]);
  }, []);

  const removeFromFavorites = useCallback(
    (id: string): void => {
      const newFavorites = favorites.filter((item) => item.imdbID !== id);
      setFavorites(newFavorites);
    },
    [favorites],
  );

  const getIsFavorite = useCallback(
    (id: string): boolean => favorites.some((item) => item.imdbID === id),
    [favorites],
  );

  const value: AppContextObj = useMemo(
    () => ({
      favorites,
      setFavorites,
      addToFavorites,
      removeFromFavorites,
      getIsFavorite,
    }),
    [favorites, addToFavorites, removeFromFavorites, getIsFavorite],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
