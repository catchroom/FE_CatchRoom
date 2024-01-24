import { useQuery, useMutation } from '@tanstack/react-query';
import { getSaleProduct, postSaleProduct } from './api';
import { ProductItem } from '@/types/sale/type';

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

export const useMutaionPostSaleProduct = () => {
  const mutation = useMutation({
    mutationKey: ['postSaleProduct'],
    mutationFn: (productItem: ProductItem) => postSaleProduct(productItem),
  });
  return mutation;
};
