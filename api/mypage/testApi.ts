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
