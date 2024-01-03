'use client';

import React from 'react';
import Image from 'next/image';
// import { getSocialAuth } from '@/api/socialAuth';
import KakaoLoginButton from './_components/KakaoLoginButton';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center  x-3 py-12 bg-bg">
      {/* 로고 */}

      <Image
        className="justify-center"
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={150}
      />
      {/* 카카오*/}
      <div className="justify-center mt-7">
        <KakaoLoginButton />
      </div>

      {/* 이메일*/}
      <div className="w-3/4 mt-5">
        <button
          className="w-full py-2"
          onClick={() => {
            router.push('/login/email');
          }}
        >
          이메일로 시작하기
        </button>
      </div>
    </div>
  );
};

export default Page;
