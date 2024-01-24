import axios from 'axios';

// 29. s검색 상품 리스트 조회
export const accommodationList = async (searchParams: {
  checkInStart: string;
  checkInEnd: string;
  type: string;
  region: string;
  pax: number;
  filter: string;
  pageNumber: number;
}) => {
  const res = await axios.get('https://catchroom.xyz/v1/product/search', {
    params: {
      checkInStart: searchParams.checkInStart,
      checkInEnd: searchParams.checkInEnd,
      type: searchParams.type,
      region: searchParams.region,
      pax: searchParams.pax,
      filter: searchParams.filter,
      pageNumber: searchParams.pageNumber,
    },
  });

  const data = res.data.data.list;
  return data;
};
