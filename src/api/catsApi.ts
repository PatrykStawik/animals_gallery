import { useQuery } from 'react-query';
import type { QueryReturn, IApiResBody } from './types';
import { getClient } from './apiClient';

export const useGetCats = (page: number): QueryReturn<IApiResBody[]> => {
  const { data, isLoading, error, isError } = useQuery<IApiResBody[], Error>({
    queryKey: ['cats', page],
    queryFn: async () =>
      await getClient<IApiResBody[]>(
        `https://api.thecatapi.com/v1/images/search?limit=50&page=${page}&order=ASC`
      ),
    onError: (error) => {
      console.error(error);
    },
    keepPreviousData: true
  });
  return { data, isLoading, error, isError };
};
