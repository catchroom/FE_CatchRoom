import { useMutation, useQuery } from '@tanstack/react-query';
import { postSaleProduct } from '../sale/api';
import { getCatchItemsList, getReviewList, getSalesHistory } from './api';
import { ProductItem } from '@/types/sale/type';
//30
export const useQueryGetSalesHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getSalesHistory'],
    queryFn: getSalesHistory,
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

export const useQueryGetCatchItemsList = (dataType: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getCatchItemsList'],
    queryFn: () => getCatchItemsList(dataType),
  });
  return { data, isLoading };
};

export const useQueryGetReviewList = (dataType: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getReviewList'],
    queryFn: () => getReviewList(dataType),
  });
  return { data, isLoading };
};
