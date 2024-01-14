'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from '@/public/svg/chevron-left.svg';
import CloseIcon from '@/public/svg/x-close.svg';
import MoreIcon from '@/public/svg/dots-vertical.svg';
import HomeIcon from '@/public/svg/home.svg';
import { HeaderProps } from '@/types/common/header/types';

const Header = ({
  title,
  showBackButton = false,
  showCloseButton = false,
  showMoreButton = false,
  showBorder = false,
  showHomeButton = false,
}: HeaderProps) => {
  const router = useRouter();

  const headerClass = `grid grid-cols-3 items-center px-6 py-3 bg-white ${
    showBorder ? 'border-b border-gray-300' : ''
  }`;

  return (
    <header className={headerClass}>
      {showBackButton ? (
        <button onClick={() => router.back()} className="justify-self-start">
          <BackIcon />
        </button>
      ) : showCloseButton ? (
        <button onClick={() => router.back()} className="justify-self-start">
          <CloseIcon />
        </button>
      ) : (
        <div />
      )}
      <h1 className="justify-self-center text-t1 font-semibold">{title}</h1>
      <div className="justify-self-end mt-1">
        {showHomeButton && (
          <button onClick={() => router.push('/home')}>
            <HomeIcon />
          </button>
        )}
        {showMoreButton && (
          <button>
            <MoreIcon />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
