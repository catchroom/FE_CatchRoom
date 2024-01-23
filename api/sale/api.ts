import { ProductItem } from '@/types/sale/type';
import { apiClient } from '../user/apiClient';

export const getSaleProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/sales/yanolja/product/detail?id=${id}`);
  return res.data;
};

export const postSaleProduct = async (product: ProductItem) => {
  const res = await apiClient.post(`/v1/sales/product`, {
    product,
  });
  return res.data;
};
