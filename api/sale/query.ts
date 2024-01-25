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

type MutationVariables = {
  id?: number;
  product: ProductItem;
  isProduct: boolean;
};

export const useMutationProduct = () => {
  // eslint-disable-next-line
  const mutation = useMutation<any, Error, MutationVariables>({
    mutationKey: ['productMutation'],
    mutationFn: async ({ id, product, isProduct }) => {
      if (isProduct) {
        // id가 제공되지 않으면 오류를 반환하거나 예외를 처리합니다.
        if (!id) throw new Error('Product ID is required for updating.');
        return await putProductInfo(product, id);
      } else {
        return await postSaleProduct(product);
      }
    },
  });

  return mutation;
};
