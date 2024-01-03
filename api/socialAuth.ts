// 인증 코드 받아서 백엔드에 보내기
// import axios from 'axios';
'use client';

export const setAuthCode = async (authCode: string) => {
  const response = await fetch(`https://catchroom.xyz/oauth2/callback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authCode: authCode,
    }),
  });

  // Response를 JSON으로 변환
  const responseData = await response.json();
  console.log('fetch입니다', authCode, responseData);
  return responseData;
};

// export const getSocialAuth2 = async (authCode: string) => {
//   return await axios.post(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/callback`,
//     { authCode: authCode },
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   );
// };
