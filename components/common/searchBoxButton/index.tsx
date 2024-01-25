import React from 'react';
import { SearchBoxIconType } from '@/types/common/searchBoxButton/types';
import HouseIcon from '@/public/svgComponent/house';
import MapPinIcon from '@/public/svgComponent/mapPin';
import CalendarIcon from '@/public/svgComponent/bigCalendar';
import PersonIcon from '@/public/svgComponent/person';
import DownArrowIcon from '@/public/svgComponent/downArrow';

/**
 * @summary 클릭 시 바텀시트(select모달창)를 불러오는 버튼입니다.
 * @summary props로 icon과 placeholder를 입력받을 수 있으며, 이 두가지는 필수 입력 사항입니다.
 *
 * @props {string} icon - 아이콘 종류는 ('pin', 'calendar', 'person', 'house')가 있습니다.
 * @props {string} placeholder - 버튼 안에 들어갈 placeholder입니다.
 * @returns {JSX.Element} SearchBoxButton 컴포넌트 반환
 */

const SearchBoxButton = ({
  icon,
  placeholder,
  onClickFunc,
}: SearchBoxIconType) => {
  return (
    <button
      className="w-full h-14 flex flex-wrap items-center justify-between my-1 p-3 px-4 bg-white border border-border-sub rounded text-t2 font-medium"
      onClick={onClickFunc}
    >
      <div className="flex">
        {icon === 'pin' && <MapPinIcon />}
        {icon === 'calendar' && <CalendarIcon />}
        {icon === 'house' && <HouseIcon />}
        {icon === 'person' && <PersonIcon />}
        <p className="ml-2 text-p1">{placeholder}</p>
      </div>
      <DownArrowIcon />
    </button>
  );
};

export default SearchBoxButton;
