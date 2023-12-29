'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomNav = () => {
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-1 bg-white border-t-2 h-16 w-full max-w-[480px]">
      <ul className="flex justify-between items-center h-full">
        <li className="flex-1">
          <Link href="/home">
            <div
              className={`text-center h-full ${
                currentPath === '/home' ? ' text-gray-1000' : 'text-gray-500'
              }`}
            >
              홈
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link href="/chat">
            <div
              className={`text-center ${
                currentPath === '/chat' ? ' text-gray-1000' : 'text-gray-500'
              }`}
            >
              채팅
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link href="/mypage">
            <div
              className={`text-center ${
                currentPath === '/mypage' ? ' text-gray-1000' : 'text-gray-500'
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
