'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomNav = () => {
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-0 bg-white border-t-2 border-gray-300 h-16 w-full max-w-[480px]">
      <ul className="flex justify-between items-center h-full">
        <li
          className={`flex-1 h-full ${
            currentPath === '/home' ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        >
          <Link href="/home">
            <div
              className={`flex justify-center items-center text-center w-full h-full ${
                currentPath === '/home' ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              홈
            </div>
          </Link>
        </li>
        <li
          className={`flex-1 h-full ${
            currentPath === '/chat' ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        >
          <Link href="/chat">
            <div
              className={`flex justify-center items-center text-center w-full h-full ${
                currentPath === '/chat' ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              채팅
            </div>
          </Link>
        </li>
        <li
          className={`flex-1 h-full ${
            currentPath === '/mypage' ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        >
          <Link href="/mypage">
            <div
              className={`flex justify-center items-center text-center w-full h-full ${
                currentPath === '/mypage' ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              마이페이지
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
