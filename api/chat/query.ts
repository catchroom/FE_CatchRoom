import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import {
  checkChatInfo,
  createChatRoom,
  fetchChatInfo,
  fetchChatRoom,
  fetchPreviousChat,
  infinitePreviousChat,
} from './api';

export const useGetChatRoom = (token: string, userId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['chatRoom'],
    queryFn: () => fetchChatRoom(token, userId),
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
    refetchInterval: 1000 * 60 * 10,
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

export const useCreateChatRoom = () => {
  const mutation = useMutation({
    mutationKey: ['createChatRoom'],
    mutationFn: ({
      buyerId,
      sellerId,
      productId,
    }: {
      buyerId: number;
      sellerId: number;
      productId: number;
    }) => createChatRoom({ buyerId, sellerId, productId }),
  });

  return mutation;
};

export const useChatRoomAvailable = () => {
  const mutation = useMutation({
    mutationKey: ['checkChatRoomAvailable'],
    mutationFn: (roomId: string) => checkChatInfo(roomId),
  });

  return mutation;
};
