import { MovieList } from './components/movieList/MovieList';
import { useState } from 'react';
import { MovieDetails } from './components/movieDetails/MovieDetails';
import * as S from './Movie.style';

export const Movie = (): JSX.Element => {
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  return (
    <S.MovieContainer>
      <MovieList selectedMovieId={selectedMovieId} setSelectedMovieId={setSelectedMovieId} />
      <MovieDetails selectedMovieId={selectedMovieId} />
    </S.MovieContainer>
  );
};
