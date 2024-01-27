import axios from 'axios';

// 1. 날짜별 체크인 마감임박 상품 조회
export const deadLineItems = async (date: string) => {
  const res = await axios.get(
    `https://catchroom.xyz/v1/main/product/list?dataType=3&date=${date}`,
  );

  const list = res.data.data.list;
  const size = res.data.data.size;
  return { list, size };
};

// 2. 날짜별 체크인 마감임박 상품 조회 전체 페이지
export const deadLinePageItems = async ({
  date,
  filter,
  region,
  pageParam,
}: {
  date: string;
  filter: string | undefined;
  region: string | number[];
  pageParam: number;
}) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/main/product/list?dataType=4&date=${date}&filter=${filter}&region=${region}&pageNumber=${pageParam}`,
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
