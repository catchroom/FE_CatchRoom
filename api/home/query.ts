import { useQuery } from '@tanstack/react-query';
import {
  getCatchItemsList,
  getCatchItemsListForScroll,
  getReviewList,
  getReviewListForScroll,
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

//무한스크롤 시도
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
  regionFilter: string,
) => {
  const regionValue = regionFilter === '' ? 'all' : regionFilter;
  const { data, isLoading } = useQuery({
    queryKey: ['getCatchItemsListForScroll', dataType, filter, regionValue],
    queryFn: () => getCatchItemsListForScroll(dataType, 1, filter, regionValue),
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

export const useQueryGetReviewListForScroll = (dataType: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getReviewListForScroll'],
    queryFn: () => getReviewListForScroll(dataType, 1),
  });
  return { data, isLoading };
};
