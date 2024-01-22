import nookies from 'nookies';
import axios from 'axios';

// 노션의 api 명세서 번호 기준으로 표시

//1. 회원가입
export const signUp = async (
  email: string,
  password: string,
  nickname: string,
  phonenumber: string,
  name: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, nickname, phonenumber, name }),
    },
  );

  const data = await res.json();
  return data;
};

// 2. 로그인
export const login = async (email: string, password: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    return data.json();
  });
};

//4. 닉네임 중복체크
export const nicknameCheck = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/nickname/check?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  return data;
};

//5. 이메일 중복체크
export const emailCheck = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/email/check?email=${email}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  return data;
};

// 6. 액세스 토큰 재발급 -> apiClient 사용할거면 필요 x, 일단 테스트용
// export const getNewToken = async () => {
//   const refreshToken = nookies.get(null)['refreshToken'];

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/accesstoken`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${refreshToken}`,
//       },
//     },
//   );

//   const data = await res.json();
//   if (data.accessToken) {
//     nookies.set(null, 'accessToken', data.accessToken, {
//       path: '/',
//     });
//   }
//   return data;
// };

export const getNewToken = async () => {
  const refreshToken = nookies.get(null)['refreshToken'];

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/accesstoken`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );
  return res.data;
};

// etc) 소셜로그인 : 카카오 인증코드 받기-> .env.local다시 설정하기
// export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
// &redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
