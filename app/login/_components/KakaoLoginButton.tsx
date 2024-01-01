import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from '../../../public/login/kakao_login_large_wide.png';

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

const KakaoLoginButton = () => {
  return (
    <Link href={loginUri} rel="noopener noreferrer">
      <Image src={loginImage} alt="카카오 이미지" width={215} />
    </Link>
  );
};

export default KakaoLoginButton;
