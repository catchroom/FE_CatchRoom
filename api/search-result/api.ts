type SearchParams = {
  checkInStart: string | undefined;
  checkInEnd: string;
  type: string | number[];
  region: string | number[];
  pax: number;
  filter: string;
  pageParam: number;
};

// 29. 검색 상품 리스트 조회
export const accommodationList = async ({
  region,
  checkInStart,
  checkInEnd,
  type,
  pax,
  filter,
  pageParam,
}: SearchParams) => {
  const res = await fetch(
    `https://catchroom.xyz/v1/product/search?region=${region}&filter=${filter}&pageNumber=${pageParam}&checkInStart=${checkInStart}&checkInEnd=${checkInEnd}&type=${type}&pax=${pax}`,
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
