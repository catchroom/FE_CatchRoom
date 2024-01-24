import { useQuery } from '@tanstack/react-query';
import { accommodationList } from './api';
type SearchParams = {
  checkInStart: string;
  checkInEnd: string;
  type: string;
  region: string;
  pax: number;
  filter: string;
  pageNumber: number;
};

// 29. 검색 상품 리스트 조회
export const useAccommodationList = (searchParams: SearchParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['accommodationList', searchParams],
    queryFn: () => accommodationList(searchParams),
  });
  return { data, isLoading, error };
};
