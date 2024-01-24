import { useQuery } from '@tanstack/react-query';
import { getSaleProduct } from './api';

//31
export const useQueryGetSaleProduct = (id: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getSaleProduct', id],
    queryFn: () => getSaleProduct(id),
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};
