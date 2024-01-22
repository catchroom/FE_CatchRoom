import { apiClient } from '../user/apiClient';

export const getSaleProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/sales/yanolja/product/detail?id=${id}`);
  return res.data;
};
