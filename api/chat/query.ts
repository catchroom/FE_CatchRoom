import { useQuery } from '@tanstack/react-query';
import { fetchChatRoom } from './api';

export const useGetChatRoom = (token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['chatRoom'],
    queryFn: () => fetchChatRoom(token),
  });

  return { data, isLoading, error };
};
