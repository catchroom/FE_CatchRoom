'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from '../../../public/svg/chevron-left.svg';
import CloseIcon from '../../../public/svg/ph_x.svg';
import MoreIcon from '../../../public/svg/dots-vertical.svg';
import Image from 'next/image';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showMoreButton?: boolean;
  showBorder?: boolean;
};

const Header = ({
  title,
  showBackButton = false,
  showCloseButton = false,
  showMoreButton = false,
  showBorder = false,
}: HeaderProps) => {
  const router = useRouter();

  const headerClass = `flex items-center justify-between px-6 py-3 bg-white ${
    showBorder ? 'border-b border-gray-300' : ''
  }`;

  return (
    <header className={headerClass}>
      {showBackButton && (
        <button onClick={() => router.back()} className="text-h2">
          <Image src={BackIcon} alt="뒤로가기 아이콘" />
        </button>
      )}
      {showCloseButton && (
        <button onClick={() => router.back()} className="text-h2">
          <Image src={CloseIcon} alt="닫기 아이콘" />
        </button>
      )}
      <h1 className="text-h2 font-semibold">{title}</h1>
      {showMoreButton && (
        <button className="text-h2">
          <Image src={MoreIcon} alt="더보기 아이콘" />
        </button>
      )}
    </header>
  );
};

export default Header;
