// 인증코드 받기
export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

// 인증 코드 백엔드에 보내기
// export const setAuthCode = async (authCode: string) => {
//   console.log('fetch입니다2', authCode);
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/callback`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         authCode: authCode,
//       }),
//     },
//   );

//   const responseData = await response.json();
//   return responseData;
// };

// 400에러 테스트용 -> 클라에서 발급해보기
// export const getAuthCode = async (authCode: string) => {
//   const response = await fetch('https://kauth.kakao.com/oauth/token', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//     },
//     body: new URLSearchParams({
//       grant_type: 'authorization_code',
//       client_id: `${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
//       redirect_uri: `https://localhost:3000/login/loading`,
//       code: authCode,
//     }),
//   });
//   const responseData = await response.json();
//   return responseData;
// };

// accessToken만 보내주기 테스트 -> 성공
// export const setAccCode = async (accessToken: string) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/test`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       accessToken: accessToken,
//     }),
//   });

//   const responseData = await response.json();
//   console.log(responseData);
//   return responseData;
// };
