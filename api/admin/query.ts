import { useMutation, useQuery } from '@tanstack/react-query';
import {
  fetchAllProduct,
  fetchMypageSelling,
  fetchOrderHistory,
  fetchSellingData,
} from './api';

export const useAdminMutation = (queryKey: string) => {
  const mutation = useMutation({
    mutationKey: [queryKey],
    // eslint-disable-next-line
    mutationFn: (body: any) => fetchMypageSelling(body),
    onSuccess: () => {
      // eslint-disable-next-line
      alert('숙소 등록이 완료되었습니다.');
    },
    onError: () => {
      // eslint-disable-next-line
      alert('숙소 등록에 실패하였습니다.');
    },
  });

  return mutation;
};

export const useAccQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['accommodation'],
    queryFn: fetchAllProduct,
  });

  return { data, isLoading };
};

export const useOrderMutation = (queryKey: string) => {
  const mutation = useMutation({
    mutationKey: [queryKey],
    // eslint-disable-next-line
    mutationFn: (body: any) => fetchOrderHistory(body),
    onSuccess: () => {
      // eslint-disable-next-line
      alert('예약이 완료되었습니다.');
    },
    onError: () => {
      // eslint-disable-next-line
      alert('예약에 실패하였습니다.');
    },
  });

  return mutation;
};

export const useOrderQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['orderHistory'],
    queryFn: fetchSellingData,
  });

  return { data, isLoading };
};
