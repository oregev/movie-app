import { H4Title } from '../../../../components';
import { FavButton } from '../../../../components/buttons';
import { IMovie } from '../../../movie/components/movieDetails';
import * as S from './favoriteMovie.style';

interface FavoriteMovieProps {
  movie: IMovie;
  onRemove: (id: string) => void;
}

export const FavoriteMovie = ({ movie, onRemove }: FavoriteMovieProps): JSX.Element => (
  <S.FavoriteContainer>
    <S.TitleContainer>
      <H4Title text={movie?.Title} />
    </S.TitleContainer>
    <S.ImageContainer>
      <img src={movie?.Poster} width="100px" />
    </S.ImageContainer>
    <FavButton onClick={() => onRemove(movie.imdbID)} title="Remove from favorites" />
  </S.FavoriteContainer>
);
