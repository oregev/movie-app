import { IMovie } from './components/movieDetails';
import { addToLocalStorage, getFromLocalStorage } from '../../utils';

export const retrieveFromLocalStorage = (): IMovie[] => {
  const localStorageFavorites = getFromLocalStorage('favorites');
  return localStorageFavorites ? (JSON.parse(localStorageFavorites) as IMovie[]) : [];
};

export const addMovieToFavorites = (movie: IMovie): void => {
  const favorites = retrieveFromLocalStorage();
  const newFavorites = [...favorites, movie];
  addToLocalStorage('favorites', JSON.stringify(newFavorites));
};

export const removeMovieFromFavorites = (id: string): void => {
  const favorites = retrieveFromLocalStorage();
  const newFavorites = favorites.filter((movie) => movie.imdbID !== id);
  addToLocalStorage('favorites', JSON.stringify(newFavorites));
};
