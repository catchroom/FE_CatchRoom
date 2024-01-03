'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import loginImage from '../../public/kakao_login_medium_wide.png';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

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

      <Link href={kakaoUrl}>
        <Image src={loginImage} alt="카카오 이미지" width={210} />
      </Link>

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
