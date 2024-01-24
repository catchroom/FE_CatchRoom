import { useQuery } from '@tanstack/react-query';
import {
  getCatchItemsList,
  getCatchItemsListForScroll,
  getReviewList,
  getSalesHistory,
} from './api';
// import { useInfiniteQuery } from 'react-query';
//30
export const useQueryGetSalesHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getSalesHistory'],
    queryFn: getSalesHistory,
  });
  return {
    isLoading,
    error,
    data,
  };
};

export const useQueryGetCatchItemsList = (dataType: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getCatchItemsList', dataType],
    queryFn: () => getCatchItemsList(dataType),
  });
  return { data, isLoading };
};

export const useQueryGetReviewList = (dataType: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getReviewList'],
    queryFn: () => getReviewList(dataType),
  });
  return { data, isLoading };
};

// export const useQueryGetCatchItemsListForScroll = (dataType: number) => {
//   return useInfiniteQuery(
//     ['getCatchItemsListForScroll', dataType],
//     async ({ pageParam = 1 }) => {
//       return getCatchItemsListForScroll(dataType, pageParam);
//     },
//     {
//       getNextPageParam: (lastPage, allPage) => {
//         return lastPage.nextPage ? allPage.length + 1 : undefined;
//       },
//     },
//   );
// };

export const useQueryGetCatchItemsListForScroll = (
  dataType: number,
  filter: string,
) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getCatchItemsListForScroll', dataType, filter],
    queryFn: () => getCatchItemsListForScroll(dataType, 1, filter, 'all'),
  });
  return { data, isLoading };
};
