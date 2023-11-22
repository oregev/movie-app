import { useQuery } from '@tanstack/react-query';
import { Axios } from '../../../api';
import { IMovie } from '../components/movieDetails/MovieDetails.types';

export const useGetMovie = (id: string | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie', id],
    queryFn: (): Promise<IMovie> =>
      Axios({
        params: { i: id },
      }),
    enabled: !!id,
  });

  return {
    movie: data,
    isLoadingMovie: isLoading,
    isMovieError: isError,
  };
};
