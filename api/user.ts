import Cookies from 'js-cookie';

const refreshToken: string = Cookies.get('refresh_token') || '';

//회원가입
export const signUp = async (
  email: string,
  password: string,
  nickname: string,
  phonenumber: string,
  name: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, nickname, phonenumber, name }),
    },
  );

  const data = await res.json();
  if (data.code === 1000) {
    //성공
    return data;
  } else if (data.code === 1001 || 1002 || 1003 || 1004) {
  } else if (data.code === 1001 || 1002 || 1003 || 1004) {
    //이메일 형식 문제
    console.log(data.message);
  }
  //굳이 분기하지 말까 ..
};

// 로그인
export const login = async (email: string, password: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data.code === 1006) {
    //성공

    // 서버 컴포넌트에서 x -> 클라이언트 컴포넌트에서 사용하기
    // document.cookie = `access_token=${data.data.access_token}; path=/`;
    // document.cookie = `refresh_token=${data.data.refresh_token}; path=/`;

    // 서버 컴포넌트에서 x -> 클라이언트 컴포넌트에서 사용하기
    // document.cookie = `access_token=${data.data.access_token}; path=/`;
    // document.cookie = `refresh_token=${data.data.refresh_token}; path=/`;

    return data;
  } else if (data.code === 1007) {
    //아이디 x
    console.log(data.message);
  } else if (data.code === 1008) {
    //비번 x
    console.log(data.message);
  }
};

//닉네임 중복체크
export const nicknameCheck = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/nicknamecheck?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 1010) {
    //성공 -> alert띄워주기
    return data;
  } else if (data.code === 1011) {
    //중복 -> 에러문구 띄워주기
    console.log(data.message);
  }
};

//이메일 중복체크
export const emailCheck = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/emailcheck?email=${email}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
      headers: { Accept: 'application/json' },
    },
  );

  const data = await res.json();
  if (data.code === 1012) {
    //성공 -> alert띄워주기
    return data;
  } else if (data.code === 1005) {
    //중복 -> 에러문구 띄워주기
    console.log(data.message);
  }
};

//리프레쉬 토큰으로 액세스 토큰 요청
export const refreshAccessToken = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/accesstoken`,
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/accesstoken`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
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
  if (data.code === 1013) {
    //성공
    return data;
  } else if (data.code === 5000) {
    //에러
    console.log(data.message);
  }
};

// 카카오 인증코드 받기-> .env.local다시 설정하기
// export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
// &redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
