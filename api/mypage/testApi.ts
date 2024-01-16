import nookies from 'nookies';

// 판매중일 때 판매중인 상품들을 가져오는 api
export const fetchMypageSelling = async () => {
  const response = await fetch(`/api/v1/mypage/saleshistory?state=ing`);
  const data = await response.json();
  return data.data;
};

// 판매가 끝났을 때 판매 내역을 가져오는 api
export const fetchMypageSellingTest = async () => {
  const response = await fetch('/api/v1/mypage/saleshistory?state=done');
  const data = await response.json();
  return data.data;
};

// 회원가입 테스트
export const signUpTest = async (
  email: string,
  password: string,
  nickname: string,
  phonenumber: string,
  name: string,
) => {
  const res = await fetch(`/api/v1/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, nickname, phonenumber, name }),
  });

  const data = await res.json();
  return data;
};

// 로그인 테스트
export const loginTest = async (email: string, password: string) => {
  const res = await fetch(`/api/v1/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
};

//리프레쉬 토큰으로 액세스 토큰 요청 테스트
export const getNewTokenTest = async () => {
  const refreshToken = nookies.get(null)['refresh_token'];

  const res = await fetch(`/api/v1/user/accesstoken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await res.json();
  return data;
};

//여기부턴 체크 x

//닉네임 중복체크 테스트 -> 파라미터랑 post라서 firebase 로직이랑 다름
export const nicknameCheckTest = async (nickname: string) => {
  const res = await fetch(`/api/v1/user/nicknamecheck/nickname=${nickname}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  const data = await res.json();
  return data;
};

//이메일 중복체크 테스트 -> 파라미터랑 post라서 firebase 로직이랑 다름
export const emailCheckTest = async (email: string) => {
  const res = await fetch(`/api/v1/user/emailcheck/email=${email}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  const data = await res.json();
  return data;
};
