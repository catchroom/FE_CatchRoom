import nookies from 'nookies';

//NEXT_PUBLIC_LOCAL_URL -> NEXT_PUBLIC_SERVER_URL로 바꾸기

//1. 이메일 중복체크
export const emailCheck = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/email/check?email=${email}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 1012) {
    return data;
  } else if (data.code === 1005) {
    return data;
    // console.log(data.message);
  }
};

//2. 닉네임 중복체크
export const nicknameCheck = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/nickname/check?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 1010) {
    return data;
  } else if (data.code === 1011) {
    console.log(data.message);
  }
};

//3. 회원가입
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
  if (data.code === 1000) {
    return data;
  } else if (data.code === 1001 || 1002 || 1003 || 1004) {
    console.log(data.message);
  }
};

// 4. 로그인
export const login = async (email: string, password: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await res.json();
  if (data.code === 1006) {
    return data;
  } else if (data.code === 1007 || 1008) {
    console.log(data.message);
  }
};

// 5. 리프레쉬 토큰으로 액세스 토큰 요청
export const getNewToken = async () => {
  const refreshToken = nookies.get(null)['refresh_token'];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/accesstoken`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({ refreshToken }),
    },
  );

  const data = await res.json();
  if (data.code === 1013) {
    //성공
    return data;
  } else if (data.code === 5000) {
    //에러
    console.log(data.message);
  }
};

// etc) 소셜로그인 : 카카오 인증코드 받기-> .env.local다시 설정하기
// export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
// &redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
