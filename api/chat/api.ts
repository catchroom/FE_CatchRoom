import axios from 'axios';

export const fetchChatRoom = async (token: string) => {
  const data = await axios.get('https://catchroom.store/v1/chat/room/list', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await data.data;
  return result;
};

export const fetchPreviousChat = async (roomId: string, token: string) => {
  console.log('roomId는', roomId);
  const data = await axios.get(
    `https://catchroom.store/v1/chat/room/find?id=${roomId}&page=0`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data;
  return result.data;
};

export const infinitePreviousChat = async ({
  pageParam,
  roomId,
  token,
}: {
  pageParam: number;
  roomId: string;
  token: string;
}) => {
  console.log('pageParam은', pageParam);
  const data = await axios.get(
    `https://catchroom.store/v1/chat/room/find?page=${pageParam}&id=${roomId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data;
  return result.data;
};
