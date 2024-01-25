import { apiClient } from '../user/apiClient';

//37.예약자 정보 불러오기
export const getOrderProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/buy/productInfo?productId=${id}`);
  return res.data;
};
