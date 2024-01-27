import { apiClient } from '../user/apiClient';
import { apiChatClient } from './apiChatClient';

// 1. 상품 상세조회 화면 API
export const roomItemInfo = async (id: string | string[] | undefined) => {
  const res = await apiClient.get(`/v1/product?id=${id}`);

  const data = res.data.data;
  const userIdentity = res.data.data.userIdentity;
  const accommodationUrl = res.data.data.accommodationUrl;
  return { data, userIdentity, accommodationUrl };
};

// 2. 채팅방 가져오기
export const fetchChatRoom = async (token: string, userId: number) => {
  const data = await apiChatClient.get(`/v1/chat/room/list?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await data.data;
  return result;
};

// 3. 채팅방 생성
export const createChatRoom = async ({
  buyerId,
  sellerId,
  productId,
}: {
  buyerId: number;
  sellerId: number;
  productId: number;
}) => {
  const data = await apiClient.post('/v1/chat/room/create', {
    buyerId: buyerId,
    sellerId: sellerId,
    productId: productId,
  });

  const result = await data.data.data.chatRoomNumber;
  return result;
};

// 이전 채팅 가져오기
export const fetchPreviousChat = async (roomId: string, token: string) => {
  const data = await apiChatClient.get(
    `/v1/chat/room/find?id=${roomId}&page=0`,
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

// 이전 채팅 무한 스크롤
export const infinitePreviousChat = async ({
  pageParam,
  roomId,
  token,
}: {
  pageParam: number;
  roomId: string;
  token: string;
}) => {
  const data = await apiChatClient.get(
    `/v1/chat/room/find?page=${pageParam}&id=${roomId}`,
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

// 채팅방 정보 가져오기
export const fetchChatInfo = async (roomId: string, token: string) => {
  const res = await apiClient.get(`/v1/chat/room/info?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.data;
  return result;
};

export const checkChatInfo = async (roomId: string) => {
  const res = await apiClient.get(`/v1/chat/room/info?roomId=${roomId}`);

  const result = await res.data;
  return result;
};
