'use client';

import React from 'react';
import { logout } from '@/api/mypage/api';

const Logout = () => {
  return (
    <div className="w-full flex">
      <p
        className="px-2 py-3 underline text-text-sub font-medium text-p2"
        onClick={() => {
          logout();
          // router.push(/login)
        }}
      >
        로그아웃
      </p>
    </div>
  );
};

export default Logout;
