import React from 'react';
import Image from 'next/image';
import KakaologinImage from '../../public/KakaoLoginButton.png';
import loginImage from '../../public/LoginButton.png';
import Link from 'next/link';
import Header from '@/components/common/header';
import Logo from '../../public/Logo.png';
import { kakaoUrl } from '@/api/socialAuth';

const Page = () => {
  return (
    <div className="w-full px-1">
      <Header title="" showBackButton />

      <div className="flex flex-col  items-center justify-center px-3 pt-20 bg-bg">
        <Image className="justify-center" alt="Logo" src={Logo} />

        <div className="mt-10">
          <Link href={kakaoUrl}>
            <Image src={KakaologinImage} alt="카카오로 시작하기" />
          </Link>
        </div>

        <div className="mt-3">
          <Link href="/login/email">
            <Image src={loginImage} alt="이메일로 시작하기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
