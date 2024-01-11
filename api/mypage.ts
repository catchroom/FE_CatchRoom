//로그아웃
export const logout = async (accessToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/mypage/logout`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
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
