import { useQuery } from '@tanstack/react-query';
import {
  getCatchItemsList,
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
