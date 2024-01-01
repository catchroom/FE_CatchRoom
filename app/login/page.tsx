'use client';

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import Image from 'next/image';
//import MyCustomButton from './_components/MyCustomButton';
import { getSocialAuth } from '@/api/socialAuth';
import KakaoLoginButton from './_components/KakaoLoginButton';

const Page = () => {
  const login2 = useGoogleLogin({
    onSuccess: (res) => {
      console.log('서버에 보낼 값', res.code.toString());

      getSocialAuth(res.code.toString())
        .then((response) => {
          console.log('구글 인증 성공', response.data);
        })
        .catch((error) => {
          console.error('구글 인증 실패', error);
        });
    },
    flow: 'auth-code',
  });

  // 백엔드에서 Authorization Code를 받아 토큰을 얻는 작업 처리 필요

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {/* 로고 */}

      <Image
        className="justify-center mt-2"
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={150}
      />
      {/* 카카오*/}
      <div className="justify-center mt-4">
        <KakaoLoginButton />
      </div>

      {/* 커스텀 적용
      <div className="justify-center mt-4">
        <MyCustomButton onClick={() => login()} />
      </div> */}

      {/* 구글 인가코드 */}
      <div className="justify-center mt-4">
        <GoogleLogin
          onSuccess={login2}
          onError={() => {
            console.log('구글 로그인 실패');
          }}
        />
      </div>

      {/* 이메일*/}
      <div className="w-3/4 mt-5">
        <button className="w-full py-2">이메일로 시작하기</button>
      </div>
    </div>
  );
};

export default Page;
