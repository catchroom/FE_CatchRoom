import { useQuery } from '@tanstack/react-query';
import { getSalesHistory } from './api';

//30
export const useQueryGetSalesHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getSalesHistory'],
    queryFn: getSalesHistory,
    // select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};
