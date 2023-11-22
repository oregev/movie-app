import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { removeMovieFromFavorites, retrieveFromLocalStorage } from '../movie/Movie.utils';
import { H2Title } from '../../components';
import { FavoriteMovie } from './components';
import * as S from './Favorites.style';

export const Favorites = (): JSX.Element => {
  const { favorites, addToFavorites, removeFromFavorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    const favoritesFromStorage = retrieveFromLocalStorage();
    if (!favorites?.length && favoritesFromStorage.length) {
      setFavorites(favoritesFromStorage);
    }
  }, [favorites, addToFavorites, setFavorites]);

  const handleRemoveFromFavorites = (id: string): void => {
    removeFromFavorites(id);
    removeMovieFromFavorites(id);
  };

  return (
    <S.FavoritesContainer>
      <S.HeaderContainer>
        <H2Title text="Favorites" />
      </S.HeaderContainer>
      <S.MovieContainer>
        {favorites?.map((movie) => (
          <FavoriteMovie key={movie.imdbID} movie={movie} onRemove={handleRemoveFromFavorites} />
        ))}
      </S.MovieContainer>
    </S.FavoritesContainer>
  );
};
