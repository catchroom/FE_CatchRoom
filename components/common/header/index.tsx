'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

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
          ←{/* 아이콘으로 변경 예정 */}
        </button>
      )}
      {showCloseButton && (
        <button onClick={() => router.back()} className="text-h2">
          X{/* 아이콘으로 변경 예정 */}
        </button>
      )}
      <h1 className="text-h2 font-semibold">{title}</h1>
      {showMoreButton && (
        <button className="text-h2">⋮{/* 아이콘으로 변경 예정 */}</button>
      )}
    </header>
  );
};

export default Header;
