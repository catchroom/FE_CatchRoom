import { apiClient } from '../user/apiClient';

export const getSalesHistory = async () => {
  const res = await apiClient.get('/v1/orderhistory/yanolja/product/candidate');
  return res.data;
};

export const getCatchItemsList = async (dataType: number) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/main/product/list?dataType=${dataType}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();
  return data.data;
};
