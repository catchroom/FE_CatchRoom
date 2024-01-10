// 판매중일 때 판매중인 상품들을 가져오는 api
export const fetchMypageSelling = async () => {
  const response = await fetch(`/api/v1/mypage/saleshistory`);
  const data = await response.json();
  return data.data;
};

// 판매가 끝났을 때 판매 내역을 가져오는 api
export const fetchMypageSellingTest = async () => {
  const response = await fetch('/api/testing/get');
  const data = await response.json();
  return data.data;
};
