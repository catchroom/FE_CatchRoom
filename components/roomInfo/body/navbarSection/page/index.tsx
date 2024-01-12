'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/atoms/roomInfo/navbarButton';
import NavRoomInfoComponent from './roomInfo';
import NavAccRegionComponent from './accRegion';
import NavAccInfoComponent from './accInfo';

const NavbarPageComponent = () => {
  const [activeButton] = useRecoilState(activeButtonState);

  return (
    <div className="w-full min-h-[332px] p-5">
      {/* 객실 정보 컴포넌트 (룸타입, LAT ROOM ONLY이건뭐지, 기준 및 최대인원, 침대갯수 등)*/}
      {activeButton === 'info' && <NavRoomInfoComponent />}
      {/* 숙소 위치 컴포넌트 (숙소 주소)*/}
      {activeButton === 'location' && <NavAccRegionComponent />}
      {/* 숙소 정보 컴포넌트 (편의시설 관련 정보)*/}
      {activeButton === 'infoDetails' && <NavAccInfoComponent />}
    </div>
  );
};

export default NavbarPageComponent;
