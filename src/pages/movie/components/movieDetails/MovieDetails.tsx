import { useContext } from 'react';
import { useGetMovie } from '../../api';
import { AppContext } from '../../../../AppContext';
import { FavButton } from '../../../../components/buttons';
import { addMovieToFavorites, removeMovieFromFavorites } from '../../Movie.utils';
import { HeartIcon } from '../../../../assets';
import * as S from './MovieDetails.style';

interface MovieDetailsProps {
  selectedMovieId: string | null;
}

export const MovieDetails = ({ selectedMovieId }: MovieDetailsProps): JSX.Element => {
  const { movie, isLoadingMovie, isMovieError } = useGetMovie(selectedMovieId);
  const { addToFavorites, removeFromFavorites, getIsFavorite } = useContext(AppContext);

  const getButtonTitle = (): string => {
    if (movie) {
      return getIsFavorite(movie.imdbID) ? 'Remove from favorites' : 'Add to favorites';
    }
    return 'Add to favorites';
  };

  const handleButtonClick = (): void => {
    if (movie) {
      if (getIsFavorite(movie.imdbID)) {
        removeFromFavorites(movie.imdbID);
        removeMovieFromFavorites(movie.imdbID);
      } else {
        addToFavorites(movie);
        addMovieToFavorites(movie);
      }
    }
  };

  return (
    <S.MovieContainer>
      {isLoadingMovie && <div>Loading...</div>}
      {isMovieError && <div>Error fetching data</div>}
      {movie && (
        <>
          <S.MovieTitle>{movie?.Title}</S.MovieTitle>
          <S.MovieDetailsContainer>
            <S.MovieDetailsTitle>Director:</S.MovieDetailsTitle>
            {movie?.Director.split(', ').map((director) => (
              <S.MovieDetails key={director}>{director}</S.MovieDetails>
            ))}
          </S.MovieDetailsContainer>
          <S.MovieDetailsContainer>
            <S.MovieDetailsTitle>Actors: </S.MovieDetailsTitle>
            {movie?.Actors.split(', ').map((actor) => (
              <S.MovieDetails key={actor}>{actor}</S.MovieDetails>
            ))}
          </S.MovieDetailsContainer>
          <S.MovieImageContainer>
            <img src={movie?.Poster} width="150px" />
            {getIsFavorite(movie.imdbID) && (
              <S.FavIconContainer>
                <HeartIcon width={20} height={20} stroke="#F00" />
              </S.FavIconContainer>
            )}
            <S.MovieDetails>Released on {movie?.Released}</S.MovieDetails>
          </S.MovieImageContainer>
          <S.FavButtonContainer>
            {<FavButton onClick={handleButtonClick} title={getButtonTitle()} />}
          </S.FavButtonContainer>
        </>
      )}
    </S.MovieContainer>
  );
};
