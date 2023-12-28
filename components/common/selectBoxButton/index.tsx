import React from 'react';
import { IconType } from 'react-icons';
import { PiMapPinFill } from 'react-icons/pi';
import { CiCalendar } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { CiHome } from 'react-icons/ci';
import { SelectBoxIconType } from '@/types/common/selectBoxButton/types';

/**
 * 클릭 시 바텀시트(select모달창)를 불러오는 버튼입니다.
 *
 * props로 icon과 placeholder를 입력받을 수 있으며, 이 두가지는 필수 입력 사항입니다.
 *
 *
 * @props {string} icon - 아이콘 종류는 ('pin', 'calendar', 'person', 'house')가 있습니다.
 * @props {string} placeholder - 버튼 안에 들어갈 placeholder입니다.
 * @returns {JSX.Element} SelectBoxButton 컴포넌트 반환
 */

const SelectBoxButton = ({ icon, placeholder }: SelectBoxIconType) => {
  let IconComponent!: IconType;
  let iconColor: string = '';

  if (icon === 'pin') {
    IconComponent = PiMapPinFill;
    iconColor = 'text-gray-400';
  }
  if (icon === 'calendar') {
    IconComponent = CiCalendar;
    iconColor = '';
  }
  if (icon === 'person') {
    IconComponent = CiUser;
    iconColor = '';
  }
  if (icon === 'house') {
    IconComponent = CiHome;
    iconColor = '';
  }

  return (
    <button className="w-full  h-14 flex flex-wrap items-center my-2  border border-black text-base">
      <IconComponent className={`mx-2 text-h1 ${iconColor}`} />
      {placeholder}
    </button>
  );
};

export default SelectBoxButton;
