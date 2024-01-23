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
  pageNumber: number,
) => {
  const regionValue = regionIdx === '' ? 'all' : regionIdx;
  const { data, isLoading, error } = useQuery({
    queryKey: ['useDeadLinePageItems', date, filter, regionValue, pageNumber],
    queryFn: () => deadLinePageItems(date, filter, regionValue, pageNumber),
  });
  return { data, isLoading, error };
};
