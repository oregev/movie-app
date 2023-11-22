import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useSearchMovies } from '../../api';
import * as S from '../../Movie.style';

interface MovieListProps {
  selectedMovieId: string | null;
  setSelectedMovieId: Dispatch<SetStateAction<string | null>>;
}

export const MovieList = ({ selectedMovieId, setSelectedMovieId }: MovieListProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const { movieList, isLoadingList, isListError } = useSearchMovies(search);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
    setSelectedMovieId(null);
  };

  const handleMovieSelect = (id: string): void => {
    setSelectedMovieId(id);
    setSearch('');
  };

  return (
    <div>
      <S.MovieSearch value={search} onChange={handleSearch} placeholder="Search a movie..." />

      {search && (
        <S.MovieSearchResults>
          {isLoadingList && <div>Loading...</div>}

          {(isListError || movieList?.Response === 'False') && <div>Error fetching data</div>}

          {movieList?.Response === 'True' &&
            !selectedMovieId &&
            movieList?.Search.map((item) => (
              <S.MovieSearchResultsItem
                key={item.imdbID}
                onClick={() => handleMovieSelect(item.imdbID)}
              >
                {item.Title}
              </S.MovieSearchResultsItem>
            ))}
        </S.MovieSearchResults>
      )}
    </div>
  );
};
