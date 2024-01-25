import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteSaleProduct,
  getProductInfo,
  getSaleProduct,
  postSaleProduct,
} from './api';
import { ProductItem } from '@/types/sale/type';
// import { useRecoilValue } from 'recoil';
// import { isProductState } from '@/atoms/sale/productAtom';

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

export const useMutationDeleteSaleProduct = () => {
  const mutation = useMutation({
    mutationKey: ['deleteSaleProduct'],
    mutationFn: (id: number) => deleteSaleProduct(id),
  });
  return mutation;
};

//48
export const useQueryGetProductInfo = (id: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getProductInfo', id],
    queryFn: () => getProductInfo(id),
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};

// export const useConditionalQuery = (id: number) => {
//   const isProduct = useRecoilValue(isProductState);

//   const queryKey = isProduct ? 'getProductInfo' : 'getSaleProduct';
//   const queryFn = isProduct ? getProductInfo : getSaleProduct;

//   return useQuery({
//     queryKey: [queryKey, id],
//     queryFn: () => queryFn(id),
//     select: ({ data }) => data,
//   });
// };
