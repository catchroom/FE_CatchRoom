'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const params = useSearchParams();
  const authCode = params?.get('code');

  useEffect(() => {
    if (authCode) {
      //백엔드로 인증 코드 보내기
      console.log('백으로 보내줄 카카오 로그인 코드', authCode);

      axios
        .post(
          'https://www.catchroom.xyz/oauth2/callback',
          { authCode: authCode },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        )
        .then((response) => {
          console.log('성공', response.data);
        })
        .catch((error) => {
          console.error('보내기 실패', error);
        });
    }
    //백엔드에서 값을 받아와야지만 로그인을 성공한 것임.
    // get을 해온 다음에, if (accessToken) 일때 redirect시켜주기
  }, [authCode]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>로그인 인증 중</p>
    </div>
  );
};

export default Page;
