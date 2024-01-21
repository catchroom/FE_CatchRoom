import { useQuery } from '@tanstack/react-query';
import { fetchMypageSelling, fetchMypageSellingTest } from './testApi';
// import { getAccount } from './api';

const queryData = {
  ing: {
    queryKey: ['mypage_onSale'],
    queryFn: fetchMypageSelling,
    retry: 1,
  },
  done: {
    queryKey: ['mypage_offSale'],
    queryFn: fetchMypageSellingTest,
    retry: 1,
  },
  // getAccount: {
  //   queryKey: ['getAccount'],
  //   queryFn: getAccount,
  // },
};

export type QueryData = typeof queryData;

export const useMyPageQuery = (queryCase: keyof QueryData) => {
  const { data, isLoading, error } = useQuery(queryData[queryCase]);

  return { data, isLoading, error };
};
