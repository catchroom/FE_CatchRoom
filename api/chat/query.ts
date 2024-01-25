import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  fetchChatInfo,
  fetchChatRoom,
  fetchPreviousChat,
  infinitePreviousChat,
} from './api';

export const useGetChatRoom = (token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['chatRoom'],
    queryFn: () => fetchChatRoom(token),
  });

  return { data, isLoading, error };
};

export const useGetPreviousChat = (roomId: string, token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['previousChat'],
    queryFn: () => fetchPreviousChat(roomId, token),
  });

  return { data, isLoading, error };
};

export const useInitialChatInfo = (roomId: string, token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['chatInfo'],
    queryFn: () => fetchChatInfo(roomId, token),
  });

  return { data, isLoading, error };
};

export const useInfiniteScroll = (roomId: string, token: string) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['messages'],
    queryFn: ({ pageParam }) =>
      infinitePreviousChat({ pageParam, roomId, token }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage };
};
