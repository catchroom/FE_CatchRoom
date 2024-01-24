import Logo from '@/public/svgComponent/logo';
import React from 'react';

const Header = () => {
  return (
    <div className="w-full mt-14 mb-14">
      <h1 className="font-bold text-h1">초특가 숙박권</h1>
      <h1 className="text-text-primary font-bold text-h1">빠르게 캐치하자!</h1>
      <div className="mt-4 text-text-sub text-t2 flex-col">
        <div className="flex items-center">
          <div className="inline-block">
            <Logo />
          </div>
          <p>은 무료 취소가 불가능한 야놀자 숙박권을</p>
        </div>

        <p>간편하게 거래할 수 있는 중개 플랫폼입니다.</p>
      </div>
    </div>
  );
};

export default Header;
