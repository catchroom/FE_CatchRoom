import { apiClient } from '../user/apiClient';

// 1. 상품 상세조회 화면 API
export const roomItemInfo = async (
  id: string | string[] | number | undefined,
) => {
  const res = await apiClient.get(`/v1/product?id=${id}`);

  const data = res.data.data;
  const userIdentity = res.data.data.userIdentity;
  const accommodationUrl = res.data.data.accommodationUrl;
  return { data, userIdentity, accommodationUrl };
};

// 2. 상품 찜하기 API
export const roomItemZim = async (id: string | string[] | undefined) => {
  const res = await apiClient.post(`/v1/buy/wish?productId=${id}`);

  return res.data;
};
