'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@/public/svg/home-line.svg';
import ChattingIcon from '@/public/svg/chatting.svg';
import MyPageIcon from '@/public/svg/face-smile.svg';
import nookies from 'nookies';

const BottomNav = () => {
  const currentPath = usePathname();
  const [mypageTitle, setMypageTitle] = useState('로그인');

  const accessToken = nookies.get(null)['accessToken'];

  useEffect(() => {
    if (accessToken !== undefined) {
      setMypageTitle('내정보');
    } else setMypageTitle('로그인');
  }, [accessToken]);

  return (
    <nav className="fixed bottom-0 bg-white border-t-2 border-gray-200 px-4 py-2 h-17 w-full max-w-[480px] z-20">
      <ul className="flex justify-between items-center h-full">
        <li
          className={`flex-1 h-full py-1 rounded-lg ${
            currentPath === '/home' ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          <Link href="/home">
            <div
              className={`flex flex-col gap-1 justify-center items-center text-center text-p4 rounded-lg w-full h-full ${
                currentPath === '/home'
                  ? 'text-gray-1000'
                  : 'text-text-secondary'
              }`}
            >
              <HomeIcon
                stroke={currentPath === '/home' ? 'black' : 'currentColor'}
              />
              <span className="text-p4 font-semibold">홈</span>
            </div>
          </Link>
        </li>
        <li
          className={`flex-1 h-full py-1 rounded-lg ${
            currentPath === '/chat' ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          <Link href="/chat">
            <div
              className={`flex flex-col gap-1 justify-center items-center text-center text-p4 w-full h-full ${
                currentPath === '/chat'
                  ? 'text-gray-1000'
                  : 'text-text-secondary'
              }`}
            >
              <ChattingIcon
                stroke={currentPath === '/chat' ? 'black' : 'currentColor'}
              />
              <span className="text-p4 font-semibold">채팅</span>
            </div>
          </Link>
        </li>
        <li
          className={`flex-1 h-full py-1 rounded-lg ${
            currentPath === '/mypage' ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          <Link href="/mypage">
            <div
              className={`flex flex-col gap-1 justify-center items-center text-center text-p4 w-full h-full ${
                currentPath === '/mypage'
                  ? 'text-gray-1000'
                  : 'text-text-secondary'
              }`}
            >
              <MyPageIcon
                stroke={currentPath === '/mypage' ? 'black' : 'currentColor'}
              />
              <span className="text-p4 font-semibold">{mypageTitle}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
