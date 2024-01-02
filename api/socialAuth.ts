import axios from 'axios';

// 인증 코드 받아서 백엔드에 보내기
export const getSocialAuth = (authCode: string) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/callback`,
    { authCode: authCode },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

//백엔드에서 토큰 받아오기
// export const getSocialToken = () => {
//   return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/~~~~~`);
// };
