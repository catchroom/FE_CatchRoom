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

// 15. 나의 판매 내역 - 게시중
export const salesHistoryListed = async () => {
  const res = await apiClient.get(`/v1/mypage/saleshistory/now`);
  return res.data;
};

// 16. 나의 판매 내역 - 게시만료
export const salesHistoryExpired = async () => {
  const res = await apiClient.get(`/v1/mypage/saleshistory/done`);
  return res.data;
};

// 18. 나의 구매 내역
export const purchaseHistory = async () => {
  const res = await apiClient.get(`/v1/mypage/purchasehistory`);
  return res.data;
};

// 19. 작성한 리뷰 보기 get
export const viewReviews = async (type: '구매' | '판매', reviewId: number) => {
  const res = await apiClient.get(
    `/v1/mypage/review?type=${type}&reviewId=${reviewId}`,
  );
  return res.data;
};

// 20. 리뷰 작성하기
export const postReview = async (
  type: '구매' | '판매',
  content: string,
  productId: number,
) => {
  const res = await apiClient.post(`/v1/mypage/review`, {
    type,
    content,
    productId,
  });

  return res.data;
};

// 21. 리뷰 수정하기
export const editReview = async (
  type: '구매' | '판매',
  content: string,
  reviewId: number,
) => {
  const res = await apiClient.put(`/v1/mypage/review`, {
    type,
    content,
    reviewId,
  });

  return res.data;
};

//28. 리뷰에서 필요한 정보 조회 (숙소 이름, 이미지, 가격)
export const getRoomInfo = async (id: string) => {
  const res = await apiClient.get(`/v1/product?id=${id}`);
  return res.data;
};

// 22. 리뷰 삭제하기 *****delete
export const deleteReviews = async (
  type: '구매' | '판매',
  reviewId: number,
) => {
  const res = await apiClient.delete(
    `/v1/mypage/review?type=${type}&reviewId=${reviewId}`,
  );
  return res.data;
};

// 23. 나의 찜 목록 보기
export const getWishlist = async () => {
  const res = await apiClient.get(`/v1/mypage/wishlist`);
  return res.data;
};

// 24. 나의 찜 삭제하기
export const deleteHeart = async (id: number) => {
  const res = await apiClient.delete(`/v1/mypage/wishlist?id=${id}`);
  return res.data;
};

// 34. 나의 판매 내역 삭제하기
export const deleteSalesList = async (id: number) => {
  const res = await apiClient.delete(`/v1/sales/product?id=${id}`);
  return res.data;
};

////////////38 아직 안함///////////////////////

// 38. 구매 내역 상세보기
export const purchaseHistoryDetail = async (id: number) => {
  const res = await apiClient.get(
    `/v1/mypage/purchasehistory/detail?buyHistoryid=${id}`,
  );
  return res.data;
};
