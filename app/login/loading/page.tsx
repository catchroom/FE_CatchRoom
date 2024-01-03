'use client';
import React from 'react';
import { setAuthCode } from '@/api/socialAuth';

const Page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) => {
  const authCode = searchParams.code;

  if (authCode) {
    setAuthCode(authCode as string);
  }

  //백엔드에서 값을 받아와야지만 로그인을 성공한 것임.
  // get을 해온 다음에, if (accessToken) 일때 redirect시켜주기

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>로그인 인증 중</p>
      {/* <button onClick={onClick}>인증 고고</button> */}
    </div>
  );
};

export default Page;
