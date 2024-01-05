import React from 'react';
import Image from 'next/image';
import loginImage from '../../public/kakao_login_medium_wide.png';
import Link from 'next/link';
import Header from '@/components/common/header';
import NextArrowIcon from '@/public/svgComponent/nextArrow';
import Logo from '../../public/Logo.png';

const Page = () => {
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

  return (
    <div className="w-full px-1">
      <Header title="" showBackButton />
      <div className="flex flex-col  items-center justify-center px-3 py-12 bg-bg">
        <Image className="justify-center" alt="Logo" src={Logo} />

        {/* 카카오*/}
        <div className="mt-5">
          <Link href={kakaoUrl}>
            <Image src={loginImage} alt="카카오 이미지" />
          </Link>
        </div>

        {/* 이메일*/}
        <div className="mt-3 text-p2 relative">
          <Link href="/login/email" className="underline">
            이메일로 시작하기
            <span className="absolute">
              <NextArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
