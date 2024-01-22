import nookies from 'nookies';
import { apiClient } from '../user/apiClient';
// 노션의 api 명세서 번호 기준으로 표시
const accessToken = nookies.get(null)['accessToken'];

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

/////////////////////////연결 시작하기///////////////////////

// 15. 나의 판매 내역 - 게시중 get
export const 판매내역게시중 = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/saleshistory?state=ing`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2015) {
    return data;
  }
};

// 나의 판매 내역 - 게시만료 get
export const 판매내역게시만료 = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/saleshistory?state=done,expriationDate,NotForSale`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2016) {
    return data;
  }
};

// 나의 판매 내역 삭제하기 *****delete
export const delete판매내역 = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/saleshistory?id=${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2017) {
    return data;
  }
};

// 나의 구매 내역 get
export const 구매내역 = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/purchasehistory`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2018) {
    return data;
  }
};

// 작성한 리뷰 보기 get
export const 리뷰보기 = async (type: '구매' | '판매') => {
  const res = await fetch(
    // type을 구매or판매로 픽스할지?
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/review?productId=?&type=${type}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2019) {
    return data;
  }
};

// 리뷰 작성하기 **post**
export const 리뷰작성 = async (type: number, content: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/review?productId=?&type=(구매or판매)`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ type, content }),
    },
  );

  const data = await res.json();
  if (data.code === 2021) {
    return data;
  } else if (data.code === 2020 || 2022) {
    //구매,판매 타입으로만 타입을 넣어주세요.
    console.log(data.message);
  }
};

// 리뷰 수정하기 put*
export const editReview = async (id: number, message: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/review?id=${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ message }),
    },
  );

  const data = await res.json();
  if (data.code === 2023) {
    return data;
  } else if (data.code === 2024 || 2022 || 2020) {
    console.log(data.message);
  }
};

// 리뷰 삭제하기 *****delete
export const deleteReview = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/review?id=${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2025) {
    return data;
  } else if (data.code === 2026 || 2020) {
    console.log(data.message);
  }
};

// 나의 찜 목록 보기 get
export const 찜목록보기 = async () => {
  const res = await fetch(
    // wishlist를 파라미터로 받을지?
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/wishlist `,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2019) {
    return data;
  }
};

// 나의 찜 삭제하기 *****delete
export const deleteHeart = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/wishlist?id=${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2028) {
    return data;
  } else if (data.code === 2029) {
    console.log(data.message);
  }
};
