'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/atoms/roomInfo/navbarButton';
import { ButtonType } from '@/types/room-info/types';

const NavbarButtonComponent = () => {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState);

  const relativeStyle = 'relative flex w-1/3 h-[34px]';
  const absoluteStyle =
    'absolute bottom-0 w-full h-[2px] bg-black rounded-full';
  const buttonStyle = 'flex w-full h-full px-3 justify-center font-semibold';

  const btnActiveStyleFunc = (prop: string) => {
    return activeButton === `${prop}` ? 'text-black' : 'text-gray-400';
  };

  const handleButtonClick = (btnName: ButtonType) => {
    setActiveButton(btnName);
  };

  return (
    <div className="flex flex-wrap border-b-[1px] border-gray-300 justify-around">
      <div className={`${relativeStyle} ${btnActiveStyleFunc('info')}`}>
        <button
          id="inview"
          className={buttonStyle}
          onClick={() => handleButtonClick('info')}
        >
          객실 정보
        </button>
        {activeButton === 'info' && <div className={absoluteStyle} />}
      </div>
      <div className={`${relativeStyle} ${btnActiveStyleFunc('location')}`}>
        <button
          className={buttonStyle}
          onClick={() => handleButtonClick('location')}
        >
          숙소 위치
        </button>
        {activeButton === 'location' && <div className={absoluteStyle} />}
      </div>
      <div className={`${relativeStyle} ${btnActiveStyleFunc('infoDetails')}`}>
        <button
          className={buttonStyle}
          onClick={() => handleButtonClick('infoDetails')}
        >
          숙소 정보
        </button>
        {activeButton === 'infoDetails' && <div className={absoluteStyle} />}
      </div>
    </div>
  );
};

export default NavbarButtonComponent;
