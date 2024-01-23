import { apiClient } from '../user/apiClient';

// 1. 날짜별 체크인 마감임박 상품 조회
export const deadLineItems = async (date: string) => {
  const res = await apiClient.get(
    `/v1/main/product/list?dataType=3&date=${date}`,
  );

  const data = res.data.data.list;
  return data;
};

// 2. 날짜별 체크인 마감임박 상품 조회 전체 페이지
export const deadLinePageItems = async (
  date: string,
  filter: string,
  region: string,
  pageNumber: number,
) => {
  const res = await apiClient.get(
    `/v1/main/product/list?dataType=4&date=${date}&filter=${filter}&region=${region}&pageNumber=${pageNumber}`,
  );

  const data = res.data.data.list;
  // const size = res.data.data.size;
  return data;
};
