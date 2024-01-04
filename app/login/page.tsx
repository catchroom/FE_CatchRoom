import React from 'react';
import Image from 'next/image';
import loginImage from '../../public/kakao_login_medium_wide.png';
import Link from 'next/link';
import Header from '@/components/common/header';

const Page = () => {
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

  return (
    <div className="w-full px-1">
      <Header title="" showBackButton />
      <div className="flex flex-col  items-center justify-center px-3 py-12 bg-bg">
        <Image
          className="justify-center"
          src="/Logo.png"
          alt="Logo"
          width={174}
          height={69}
        />

        {/* 카카오*/}
        <div className="mt-3">
          <Link href={kakaoUrl}>
            <Image src={loginImage} alt="카카오 이미지" width={314} />
          </Link>
        </div>

        {/* 이메일*/}
        <div className="mt-3 text-p2">
          <Link href="/login/email" className="hover:underline">
            이메일로 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
