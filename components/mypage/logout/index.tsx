'use client';

import React from 'react';
import { logout } from '@/api/mypage/api';
import nookies from 'nookies';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  return (
    <div className="w-full flex">
      <p
        className="px-2 py-3 underline text-text-sub font-medium text-p2 cursor-pointer"
        onClick={() => {
          logout()
            .then((response) => {
              console.log(response);
              if (response.code === 2000) {
                nookies.destroy(null, 'accessToken');
                nookies.destroy(null, 'refreshToken');
                router.push('/login');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        로그아웃
      </p>
    </div>
  );
};

export default Logout;
