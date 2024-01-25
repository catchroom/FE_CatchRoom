import { ProductItem } from '@/types/sale/type';
import { apiClient } from '../user/apiClient';

//31. 판매할 숙박권 기본정보 조회
export const getSaleProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/sales/yanolja/product/detail?id=${id}`);
  return res.data;
};
//32. 상품 등록
export const postSaleProduct = async (product: ProductItem) => {
  const res = await apiClient.post(`/v1/sales/product`, product);
  return res.data;
};
//34. 상품 삭제
export const deleteSaleProduct = async (id: number) => {
  const res = await apiClient.delete(`/v1/sales/product?id=${id}`);
  return res.data;
};

//48. 상품 기존 등록정보 불러오기
export const getProductInfo = async (id: number) => {
  const res = await apiClient.get(`/v1/sales/edit/info/product?id=${id}`);
  return res.data;
};

//33. 상품 수정
export const putProductInfo = async (product: ProductItem, id: number) => {
  const res = await apiClient.put(`/v1/sales/product?id=${id}`, product);
  return res.data;
};
