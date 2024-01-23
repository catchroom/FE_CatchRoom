import { cookies } from 'next/headers';
const accessToken = cookies().get('accessToken')?.value;

// 1. 참여중인 채팅방 리스트 보기
export const loadedChatList = async () => {
  const res = await fetch('https://catchroom.store/v1/chat/room/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache',
  });

  const data = await res.json();
  return data;
};
