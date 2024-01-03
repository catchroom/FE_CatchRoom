import React from 'react';
// import { setAuthCode } from '@/api/socialAuth';

const setAuthCode = async (authCode: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/callback`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authCode: authCode,
      }),
    },
  );
  const responseData = await response.json();
  console.log(authCode, responseData);
};

// export const getAuthCode = async (authCode: string) => {
//   try {
//     // 400에러 테스트용 -> 클라에서 발급해보기
//     const res = await fetch('https://kauth.kakao.com/oauth/token', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//       body: new URLSearchParams({
//         grant_type: 'authorization_code',
//         client_id: `${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
//         redirect_uri: `https://localhost:3000/login/loading`,
//         code: authCode,
//       }),
//     });

//     const data = await res.json();
//     console.log('data??', data);
//     const { access_token } = data;

//     console.log('발급된 토큰', access_token);

//     const userRes = await fetch(`https://kapi.kakao.com/v2/user/me`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//     });

//     const userData = await userRes.json();
//     console.log('결과', userData);
//   } catch (error) {
//     console.error(error);
//   }
// };

const Page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) => {
  setAuthCode(searchParams.code as string);
  // getAuthCode(searchParams.code as string);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>로그인 인증 진행중</p>
    </div>
  );
};

export default Page;

// 'use client';
// import React from 'react';
// import { setAuthCode } from '@/api/socialAuth';

// export const getAuthCode2 = async (authCode: string) => {
//   try {
//     // 400에러 테스트용 -> 클라에서 발급해보기
//     const res = getAuthCode(authCode);
//     const data = await res;
//     console.log('data??', data);
//     const { access_token } = data;
//     console.log('프론트에서 발급된 토큰', access_token);

//     const userRes = await fetch(`https://kapi.kakao.com/v2/user/me`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//     });

//     const userData = await userRes.json();
//     console.log('결과', userData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const Page = ({
//   searchParams,
// }: {
//   searchParams: {
//     [key: string]: string;
//   };
// }) => {
//   setAuthCode(searchParams.code as string);
//   console.log('인증중', searchParams.code as string);
//   return (
//     <div className="w-screen h-screen flex flex-col items-center justify-center">
//       <p>로그인 인증 중</p>
//     </div>
//   );
// };

// export default Page;
