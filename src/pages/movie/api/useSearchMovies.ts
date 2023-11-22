import { useQuery } from '@tanstack/react-query';
import { Axios } from '../../../api';
import { IMovies } from '../components/movieList';

export const useSearchMovies = (search: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', search],
    queryFn: (): Promise<IMovies> =>
      Axios({
        params: { s: search },
      }),
    enabled: !!search,
  });

  return {
    movieList: data as IMovies,
    isLoadingList: isLoading,
    isListError: isError,
  };
};
