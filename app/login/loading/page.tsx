'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const params = useSearchParams();
  const code = params?.get('code'); //이 코드를 백엔드로 보내주기

  useEffect(() => {
    if (code) {
      console.log('백으로 보내줄 카카오 로그인 코드', code);
    }
  }, [code]);

  // 백엔드에 이 코드를 보내주고, 백엔드에서 상태코드를 받아서 이게 정상적인 접근코드라면 그때 홈으로 redirect시켜주기

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>로그인 인증 중</p>
    </div>
  );
};

export default Page;
