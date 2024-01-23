import { useQuery } from '@tanstack/react-query';
import { fetchChatRoom, fetchPreviousChat } from './api';

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
