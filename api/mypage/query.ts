import { useQuery } from '@tanstack/react-query';
import {
  getAccount,
  depositDetail,
  getUserProfile,
  salesHistoryListed,
  salesHistoryExpired,
  purchaseHistory,
} from './api';

// 8
export const useQueryGetProfile = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getUserProfile'],
    queryFn: getUserProfile,
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};

// 9
export const useQueryGetAccount = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getAccount'],
    queryFn: getAccount,
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};

// 14
export const useQueryGetDetail = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['depositDetail'],
    queryFn: depositDetail,
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};

// 15, 16
const queryData = {
  ing: {
    queryKey: ['salesHistoryListed'],
    queryFn: salesHistoryListed,
  },
  done: {
    queryKey: ['salesHistoryExpired'],
    queryFn: salesHistoryExpired,
  },
};

export type QueryData = typeof queryData;

export const useMyPageQuery = (queryCase: keyof QueryData) => {
  const { data, isLoading, error } = useQuery(queryData[queryCase]);

  return { data, isLoading, error };
};

// 18
export const useQueryGetPurchaseHistory = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['purchaseHistory'],
    queryFn: purchaseHistory,
    select: ({ data }) => data,
  });
  return {
    isLoading,
    error,
    data,
  };
};
