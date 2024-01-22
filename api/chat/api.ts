import nookies from 'nookies';
import axios from 'axios';
const accessToken = nookies.get(null)['accessToken'];

const ACCESSTOKEN = '6231025e-0347-4ae3-9fdd-dd4e6cbb5abe';

// 1. 참여중인 채팅방 리스트 보기
export const loadedChatList = async () => {
  const res = await fetch('https://catchroom.xyz/v1/chat/room/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();
  console.log(data);
};

// 2. 채팅방 생성하기
export const creatChatRoom = async (
  buyerId: string,
  sellerId: string,
  productId: string,
) => {
  const res = await fetch(`https://catchroom.xyz/v1/chat/room/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ buyerId, sellerId, productId }),
  });

  const data = await res.json();
  console.log(data);
};

// 3. 채팅 내용 불러오기
export const loadedChatMessage = async (roomId: string) => {
  const res = await fetch(`http://catchroom.xyz/v1/chat/find?id=${roomId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESSTOKEN}`,
    },
  });

  const data = await res.json();
  console.log(data);
};

// 4. 채팅방 내부 정보 불러오기
export const loadedChatInfo = async (roomId: string) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/chat/room?roomId=${roomId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  console.log(data);
};

export const fetchChatRoom = async (token: string) => {
  const data = await axios.get('https://catchroom.xyz/v1/chat/room/list', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await data.data;
  return result.data;
};
