import { useQuery } from '@tanstack/react-query';
import { deadLineItems, deadLinePageItems } from './api';

// 1. 날짜별 체크인 마감임박 상품 조회
export const useDeadLineItems = (date: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['deadLineItems', date],
    queryFn: () => deadLineItems(date),
  });
  return { data, isLoading, error };
};

// 2. 날짜별 체크인 마감임박 상품 조회 전체 페이지
export const useDeadLinePageItems = (
  date: string,
  filter: string,
  regionIdx: string,
  pageParam: number,
) => {
  const region = regionIdx === '' ? 'all' : regionIdx;
  const { data, isLoading, error } = useQuery({
    queryKey: ['useDeadLinePageItems', date, filter, region, pageParam],
    queryFn: () => deadLinePageItems({ date, filter, region, pageParam }),
  });
  return { data, isLoading, error };
};
