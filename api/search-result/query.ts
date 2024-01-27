import { useQuery } from '@tanstack/react-query';
import { accommodationList } from './api';

// 29. 검색 상품 리스트 조회
export const useAccommodationList = (
  checkInStart: string | undefined,
  checkInEnd: string,
  type: string | number[],
  region: string | number[],
  pax: number,
  filter: string,
  pageParam: number,
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      'accommodationList',
      region,
      checkInStart,
      checkInEnd,
      type,
      pax,
      filter,
      pageParam,
    ],
    queryFn: () =>
      accommodationList({
        region,
        checkInStart,
        checkInEnd,
        type,
        pax,
        filter,
        pageParam,
      }),
  });
  return { data: data?.list, isLoading, error };
};

// export const useAccommodationList = (
//   checkInStart: Date | undefined,
//   checkInEnd: Date,
//   type: string | number[],
//   region: string | number[],
//   pax: number,
//   filter: string,
//   pageParam: number,
// ) => {
//   return useInfiniteQuery({
//     queryKey: [
//       'accommodationList',
//       region,
//       checkInStart,
//       checkInEnd,
//       type,
//       pax,
//       filter,
//       pageParam,
//     ],
//     queryFn: ({ pageParam }) =>
//       accommodationList({
//         checkInStart,
//         checkInEnd,
//         type,
//         region,
//         pax,
//         filter,
//         pageParam,
//       }),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.nextPage ? allPages.length + 1 : undefined;
//     },
//   });
// };
