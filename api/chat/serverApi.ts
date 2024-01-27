import { cookies } from 'next/headers';

// 1. 참여중인 채팅방 리스트 보기
export const loadedChatList = async () => {
  const accessToken = cookies().get('accessToken')?.value;
  const userId = cookies().get('userId')?.value;
  if (!accessToken || !userId) {
    return null;
  }

  const res = await fetch(
    `https://catchroom.store/v1/chat/room/list?userId=${userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-cache',
    },
  );

  const data = await res.json();
  return data;
};
