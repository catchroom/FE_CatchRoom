import { useMutation, useQuery } from '@tanstack/react-query';
import { roomItemInfo, roomItemZim } from './api';

// 1. 상품정보 상세조회
export const useRoomItem = (id: string | string[] | number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['roomItemInfo', id],
    queryFn: () => roomItemInfo(id),
  });
  return { data, isLoading, error };
};

// 상품 찜하기
export const useRoomItemZim = () => {
  const mutation = useMutation({
    mutationKey: ['useRoomItemZim'],
    mutationFn: ({ id }: { id: string }) => roomItemZim(id),
  });

  return mutation;
};
