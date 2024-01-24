import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteSaleProduct, getSaleProduct } from './api';

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

export const useMutationDeleteSaleProduct = () => {
  const mutation = useMutation({
    mutationKey: ['deleteSaleProduct'],
    mutationFn: (id: number) => deleteSaleProduct(id),
  });
  return mutation;
};
