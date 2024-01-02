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

  const headerClass = `grid grid-cols-3 items-center px-6 py-3 bg-white ${
    showBorder ? 'border-b border-gray-300' : ''
  }`;

  return (
    <header className={headerClass}>
      {showBackButton ? (
        <button onClick={() => router.back()} className="justify-self-start">
          <Image src={BackIcon} alt="뒤로가기 아이콘" />
        </button>
      ) : (
        <div />
      )}{' '}
      <h1 className="justify-self-center text-h2 font-semibold">{title}</h1>
      {showCloseButton || showMoreButton ? (
        <div className="justify-self-end">
          {showCloseButton && (
            <button onClick={() => router.back()}>
              <Image src={CloseIcon} alt="닫기 아이콘" />
            </button>
          )}
          {showMoreButton && (
            <button>
              <Image src={MoreIcon} alt="더보기 아이콘" />
            </button>
          )}
        </div>
      ) : (
        <div />
      )}{' '}
    </header>
  );
};

export default Header;
