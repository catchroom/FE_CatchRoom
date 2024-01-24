import { apiClient } from '../user/apiClient';

export const getSalesHistory = async () => {
  const res = await apiClient.get('/v1/orderhistory/yanolja/product/candidate');
  return res.data;
};
