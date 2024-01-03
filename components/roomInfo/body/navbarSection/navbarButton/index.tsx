'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/atoms/roomInfo/navbarButton';
import { ButtonType } from '@/types/roomInfo/types';

const NavbarButtonComponent = () => {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState);

  const handleButtonClick = (button: ButtonType) => {
    setActiveButton(button);
  };
  return (
    <div className="flex flex-wrap border-b-[2px] border-gray-300  justify-around">
      <div
        className={`relative flex w-1/3 h-[34px] ${
          activeButton === 'info' ? 'text-black' : 'text-gray-400'
        }`}
      >
        <button
          className="flex w-full h-full px-3 justify-center"
          onClick={() => handleButtonClick('info')}
        >
          객실 정보
        </button>
        {activeButton === 'info' && (
          <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
        )}
      </div>
      <div
        className={`relative flex w-1/3 h-[34px] ${
          activeButton === 'location' ? 'text-black' : 'text-gray-400'
        }`}
      >
        <button
          className="flex w-full h-full px-3 justify-center"
          onClick={() => handleButtonClick('location')}
        >
          숙소 위치
        </button>
        {activeButton === 'location' && (
          <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
        )}
      </div>
      <div
        className={`relative flex w-1/3 h-[34px] ${
          activeButton === 'infoDetails' ? 'text-black' : 'text-gray-400'
        }`}
      >
        <button
          className="flex w-full h-full px-3 justify-center"
          onClick={() => handleButtonClick('infoDetails')}
        >
          숙소 정보
        </button>
        {activeButton === 'infoDetails' && (
          <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
        )}
      </div>
    </div>
  );
};

export default NavbarButtonComponent;
