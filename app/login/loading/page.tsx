'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSocialAuth } from '@/api/socialAuth';

const Page = () => {
  const params = useSearchParams();
  const authCode = params?.get('code');

  useEffect(() => {
    if (authCode) {
      console.log('백으로 보내줄 카카오 로그인 코드', authCode);

      getSocialAuth(authCode)
        .then((res) => {
          console.log('카카오 인증 성공', res.data);
        })
        .catch((error) => {
          console.error('카카오 인증 실패', error);
        });
    }
  }, [authCode]);

  //백엔드에서 값을 받아와야지만 로그인을 성공한 것임.
  // get을 해온 다음에, if (accessToken) 일때 redirect시켜주기

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>로그인 인증 중</p>
    </div>
  );
};

export default Page;
