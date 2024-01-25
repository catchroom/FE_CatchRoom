import { getOrderProduct, postOrderInfo } from './api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { OrderData } from '@/types/order/purchase/types';

//37.예약자 정보 불러오기
export const useQueryGetOrderProduct = (productId: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getOrderProduct', productId],
    queryFn: () => getOrderProduct(productId),
    select: ({ data }) => data,
  });
  return { data, isLoading, error };
};

//38. 상품 구매하기
export const useMutationPostOrderInfo = () => {
  const mutation = useMutation({
    mutationKey: ['postOrderInfo'],
    mutationFn: (orderData: OrderData) => postOrderInfo(orderData),
  });
  return mutation;
};
