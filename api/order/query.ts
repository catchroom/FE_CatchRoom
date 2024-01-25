import { useQuery } from '@tanstack/react-query';
import { getOrderProduct } from './api';

//37.예약자 정보 불러오기
export const useQueryGetOrderProduct = (productId: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getOrderProduct', productId],
    queryFn: () => getOrderProduct(productId),
    select: ({ data }) => data,
  });
  return { data, isLoading, error };
};
