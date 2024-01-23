import { apiClient } from '../user/apiClient';
// 노션의 api 명세서 번호 기준으로 표시
//import nookies from 'nookies';

//6. 로그아웃
export const logout = async () => {
  const res = await apiClient.post('/v1/mypage/logout');
  return res.data;
};

// export const logout = async () => {
//   console.log(accessToken);
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/logout`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       },
//     },
//   );
//   const data = await res.json();
//   return data;
// };

// 7. 닉네임 변경
export const editProfile = async (nickname: string) => {
  const res = await apiClient.put(
    `/v1/mypage/profile/nickname?nickName=${nickname}`,
    {
      nickname,
    },
  );

  return res.data;
};

// 8. 유저정보 조회
export const getUserProfile = async () => {
  const res = await apiClient.get(`/v1/mypage/profile`);
  return res.data;
};

// 9. 계좌정보 조회
export const getAccount = async () => {
  const res = await apiClient.get(`/v1/mypage/deposit/accountnum`);
  return res.data;
};

// 10. 예치금 계좌 등록하기
export const registerAccount = async (
  bankName: string,
  accountNumber: string,
  accountOwner: string,
) => {
  const res = await apiClient.post(`/v1/mypage/accountnum`, {
    bankName,
    accountNumber,
    accountOwner,
  });

  return res.data;
};

// 11. 예치금 계좌 수정하기
export const editAccount = async (
  bankName: string,
  accountNumber: string,
  accountOwner: string,
) => {
  const res = await apiClient.put(`/v1/mypage/accountnum`, {
    bankName,
    accountNumber,
    accountOwner,
  });

  return res.data;
};

// 12. 예치금 계좌 삭제하기
export const deleteAccount = async () => {
  const res = await apiClient.delete(`/v1/mypage/accountnum`);
  return res.data;
};

// 13. 예치금 출금하기
export const withdrawAccount = async (deposit: string) => {
  const res = await apiClient.post(
    `/v1/mypage/deposit/withdraw?deposit=${deposit}`,
  );
  return res.data;
};

// 14. 예치금 내역 보기 (상세 조회)
export const depositDetail = async () => {
  const res = await apiClient.get(`/v1/mypage/deposit/detail`);
  return res.data;
};

// 15. 나의 판매 내역 - 게시중 get
export const salesHistoryListed = async () => {
  const res = await apiClient.get(`/v1/mypage/saleshistory/now`);
  return res.data;
};

// 16. 나의 판매 내역 - 게시만료 get
export const salesHistoryExpired = async () => {
  const res = await apiClient.get(`/v1/mypage/saleshistory/done`);
  return res.data;
};

// 18. 나의 구매 내역 get
export const purchaseHistory = async () => {
  const res = await apiClient.get(`/v1/mypage/purchasehistory`);
  return res.data;
};

/////////////////////////연결 시작하기///////////////////////

// 19. 작성한 리뷰 보기 get
export const viewReviews = async (type: '구매' | '판매') => {
  const res = await apiClient.get(`/v1/mypage/review?productId=?&type=${type}`);
  return res.data;
};

// 20. 리뷰 작성하기 **post**
export const postReview = async (type: number, content: number) => {
  const res = await apiClient.post(
    `/v1/mypage/review?productId=?&type=(구매or판매)`,
    {
      type,
      content,
    },
  );

  return res.data;
};

// 21. 리뷰 수정하기 put*
export const editReview = async (id: number, message: string) => {
  const res = await apiClient.post(`/v1/mypage/review?id=${id}`, {
    message,
  });

  return res.data;
};

// 22. 리뷰 삭제하기 *****delete
export const deleteReview = async (id: number) => {
  const res = await apiClient.delete(`/v1/mypage/review?id=${id}`);
  return res.data;
};

// 23. 나의 찜 목록 보기
export const getWishlist = async () => {
  const res = await apiClient.get(`/v1/mypage/wishlist`);
  return res.data;
};

// 24. 나의 찜 삭제하기 *****delete
export const deleteHeart = async (id: number) => {
  const res = await apiClient.delete(`/v1/mypage/wishlist?id=${id}`);
  return res.data;
};

// 34. 나의 판매 내역 삭제하기 *****delete  ->34와 동일
export const deleteSalesList = async (id: number) => {
  const res = await apiClient.delete(`/v1/sales/product?id=${id}`);
  return res.data;
};

// 38. 구매 내역 상세보기
export const purchaseHistoryDetail = async (id: number) => {
  const res = await apiClient.get(
    `/v1/mypage/purchasehistory/detail?buyHistoryid=${id}`,
  );
  return res.data;
};
