import { useQuery } from '@tanstack/react-query';
import { roomItemInfo } from './api';

// 1. 상품정보 상세조회
export const useRoomItem = (id: string | string[] | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['roomItemInfo', id],
    queryFn: () => roomItemInfo(id),
  });
  return { data, isLoading, error };
};
