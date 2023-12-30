'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from '../../../public/svg/chevron-left.svg';
import CloseIcon from '../../../public/svg/ph_x.svg';
import MoreIcon from '../../../public/svg/dots-vertical.svg';
import Image from 'next/image';
import { HeaderProps } from '@/types/common/types';

const Header = ({
  title,
  showBackButton = false,
  showCloseButton = false,
  showMoreButton = false,
  showBorder = false,
}: HeaderProps) => {
  const router = useRouter();

  const headerClass = `flex relative w-full items-center justify-between px-6 py-3 bg-gray-100 ${
    showBorder ? 'border-b border-gray-300' : ''
  }`;

  return (
    <header className={headerClass}>
      {showBackButton && (
        <button onClick={() => router.back()} className="text-h2">
          <Image src={BackIcon} alt="뒤로가기 아이콘" />
          {''}
        </button>
      )}
      {showCloseButton && (
        <button onClick={() => router.back()} className="text-h2">
          <Image src={CloseIcon} alt="닫기 아이콘" />
          {''}
        </button>
      )}
      <h1 className="text-h2 absolute left-1/2 -translate-x-1/2 font-semibold">
        {title}
      </h1>
      {showMoreButton && (
        <button type="button" className="text-h2">
          <Image src={MoreIcon} alt="더보기 아이콘" />
          {''}
        </button>
      )}
    </header>
  );
};

export default Header;
