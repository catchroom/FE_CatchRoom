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

export const getCatchItemsListForScroll = async ({
  dataType,
  pageParam,
  filter,
  region,
}: {
  dataType: number;
  pageParam: number;
  filter: string;
  region: string | number[];
}) => {
  console.log('hi', pageParam);
  const res = await fetch(
    `https://catchroom.xyz/v1/main/product/list?dataType=${dataType}&pageNumber=${pageParam}&filter=${filter}&region=${region}`,
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

export const getReviewList = async (dataType: number) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/main/review/list?dataType=${dataType}`,
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

export const getReviewListForScroll = async (
  dataType: number,
  pageNumber: number,
) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/main/review/list?dataType=${dataType}&pageNumber=${pageNumber}`,
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
