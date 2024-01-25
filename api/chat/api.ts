import axios from 'axios';
import { apiClient } from '../user/apiClient';

// 1. 상품 상세조회 화면 API
export const roomItemInfo = async (id: string | string[] | undefined) => {
  const res = await apiClient.get(`/v1/product?id=${id}`);

  const data = res.data.data;
  const userIdentity = res.data.data.userIdentity;
  const accommodationUrl = res.data.data.accommodationUrl;
  return { data, userIdentity, accommodationUrl };
};

// 2. 채팅방 생성
export const createChatRoom = async (
  buyerId: number,
  sellerId: number,
  productId: number,
  token: string,
) => {
  const data = await axios.post(
    'https://catchroom.xyz/v1/chat/room/create',
    {
      buyerId,
      sellerId,
      productId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data.data.chatRoomNumber;
  console.log(result);
  console.log(buyerId, sellerId, productId);
  return result;
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
