'use client';
import Logo from '@/public/svgComponent/logo';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [screenSize, setScreenSize] = useState('l');

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 390) setScreenSize('l');
      else if (window.innerHeight >= 320 && window.innerWidth < 390)
        setScreenSize('m');
      else setScreenSize('s');
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className="w-full mt-14 mb-14">
      <h1 className="font-bold text-h1">초특가 숙박권</h1>
      <h1 className="text-text-primary font-bold text-h1">빠르게 캐치하자!</h1>
      <div className="mt-4 text-text-sub lg:text-t2 flex-col md:text-t3 sm:text-t3 text-t3">
        <div className="flex items-center">
          <div className="inline-block">
            <Logo
              width={screenSize !== 'l' ? 39 : 48}
              height={screenSize !== 'l' ? 13 : 15}
            />
          </div>
          <p>은 무료 취소가 불가능한 야놀자 숙박권을</p>
        </div>
        <p>간편하게 거래할 수 있는 중개 플랫폼입니다.</p>
      </div>
    </div>
  );
};

export default Header;
