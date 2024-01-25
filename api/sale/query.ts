import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteSaleProduct,
  getProductInfo,
  getSaleProduct,
  postSaleProduct,
  putProductInfo,
} from './api';
import { ProductItem } from '@/types/sale/type';

//31
// export const useQueryGetSaleProduct = (id: number) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['getSaleProduct', id],
//     queryFn: () => getSaleProduct(id),
//     select: ({ data }) => data,
//   });
//   return {
//     isLoading,
//     error,
//     data,
//   };
// };

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
// export const useQueryGetProductInfo = (id: number) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['getProductInfo', id],
//     queryFn: () => getProductInfo(id),
//     select: ({ data }) => data,
//   });
//   return {
//     isLoading,
//     error,
//     data,
//   };
// };

export const useConditionalQuery = (isProduct: boolean, id: number) => {
  const queryKey = isProduct ? 'getProductInfo' : 'getSaleProduct';
  const queryFn = isProduct ? getProductInfo : getSaleProduct;

  return useQuery({
    queryKey: [queryKey, id],
    queryFn: () => queryFn(id),
    select: ({ data }) => data,
  });
};

export const useMutationPutProductInfo = () => {
  const mutation = useMutation({
    mutationKey: ['putProductInfo'],
    mutationFn: ({ id, product }: { id: number; product: ProductItem }) =>
      putProductInfo(product, id),
  });
  return mutation;
};
