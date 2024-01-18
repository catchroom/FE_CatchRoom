import nookies from 'nookies';
import { apiClient } from '../user/apiClient';

const accessToken = nookies.get(null)['accessToken'];

//6. 로그아웃
export const logout = async () => {
  const res = await apiClient.post('/v1/mypage/logout');
  const data = res.data;
  return data;
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

// 프로필 수정 put*
export const editProfile = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/profile`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2002) {
    return data;
  } else if (data.code === 2003) {
    console.log(data.message);
  }
};

// 닉네임 조회 get
export const nickname찾기 = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/profile/nickname?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 2004) {
    return data;
  } else if (data.code === 1011) {
    //에러코드 수정하기!!
    console.log(data.message);
  }
};

// 계좌번호,예치금 잔액 조회 get
export const 잔액조회 = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/profile/nickname?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 2004) {
    return data;
  } else if (data.code === 1011) {
    //에러코드 수정하기!!
    console.log(data.message);
  }
};

// 예치금 계좌 등록하기 **post**
export const registerAccount = async (
  bankname: string,
  accountnum: string,
  accountowner: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/accountnum`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ bankname, accountnum, accountowner }),
    },
  );

  const data = await res.json();
  if (data.code === 2006) {
    return data;
  } else if (data.code === 2007) {
    //은행 존재x
    console.log(data.message);
  }
};

// 예치금 계좌 수정하기 put*
export const editAccount = async (
  bankname: string,
  accountnum: string,
  accountowner: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/accountnum`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ bankname, accountnum, accountowner }),
    },
  );

  const data = await res.json();
  if (data.code === 2010) {
    return data;
  } else if (data.code === 2007) {
    console.log(data.message);
  }
};

// 예치금 계좌 삭제하기 *****delete
export const delete계좌 = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/accountnum`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2011) {
    return data;
  }
};

// 예치금 출금하기 **post**
export const 출금Account = async (deposit: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/deposit/withdraw`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ deposit }),
    },
  );

  const data = await res.json();
  if (data.code === 2012) {
    return data;
  } else if (data.code === 2013) {
    //예치금 잔액보다 출금 금액이 더 큽니다.
    console.log(data.message);
  }
};

// 예치금 내역 보기 (상세 조회) get  ---> id
export const 예치금내역보기 = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/deposit/detail`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await res.json();
  if (data.code === 2014) {
    return data;
  } else if (data.code === 1011) {
    //에러코드 수정하기!!
    console.log(data.message);
  }
};

// 나의 판매 내역 - 게시중 get
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
