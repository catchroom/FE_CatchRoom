import { OrderData } from '@/types/order/purchase/types';
import { apiClient } from '../user/apiClient';

//37.예약자 정보 불러오기
export const getOrderProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/buy/productInfo?productId=${id}`);
  return res.data;
};

//36. 상품 구매하기
export const postOrderInfo = async (orderData: OrderData) => {
  const res = await apiClient.post(`/v1/buy`, orderData);
  return res.data;
};

//38. 나의 구매 내역 상세보기
export const getOrderComplete = async (id: number) => {
  const res = await apiClient.get(
    `/v1/buy/mypage/purchasehistory/detail?productId=${id}`,
  );
  return res.data;
};
