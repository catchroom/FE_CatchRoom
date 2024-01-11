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
  } else if (data.code === 1001) {
    //이메일 형식 문제
    console.log(data.message);
  } else if (data.code === 1002) {
    //비밀번호 형식 문제
    console.log(data.message);
  } else if (data.code === 1003) {
    //전화번호 형식 문제
    console.log(data.message);
  } else if (data.code === 1004) {
    //닉네임 형식 문제
    console.log(data.message);
  }
};

signUp('TEST@test.com', 'password', '닉네임', '010', '김'); //테스트시 사용하기(eslint 에러때문에 ㅋㅋ)

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
    document.cookie = `access_token=${data.data.access_token}; path=/`;
    document.cookie = `refresh_token=${data.data.refresh_token}; path=/`;
    return data;
  } else if (data.code === 1007) {
    //아이디 x
    console.log(data.message);
  } else if (data.code === 1008) {
    //비번 x
    console.log(data.message);
  }
};

login('TEST@test.com', 'password'); //테스트시 사용하기(eslint 에러때문에 ㅋㅋ)

//닉네임 중복체크
export const nicknameCheck = async (nickname: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/user/nicknamecheck?nickname=${nickname}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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
      headers: { 'Content-Type': 'application/json' },
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
export const refreshAccessToken = async (refreshToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/auth/refresh`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    },
  );

  const data = await res.json();
  return data;
};

// 카카오 인증코드 받기-> .env.local다시 설정하기
// export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
// &redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
