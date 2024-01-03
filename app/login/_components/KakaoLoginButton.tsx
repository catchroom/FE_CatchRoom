import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from '../../../public/kakao_login_medium_wide.png';

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=e1ee4483cc660fd4d17c4e4872779cf6\
&redirect_uri=https://localhost:3000/login/loading&response_type=code`;

const KakaoLoginButton = () => {
  return (
    <Link href={loginUri} rel="noopener noreferrer">
      <Image src={loginImage} alt="카카오 이미지" width={210} />
    </Link>
  );
};

export default KakaoLoginButton;
