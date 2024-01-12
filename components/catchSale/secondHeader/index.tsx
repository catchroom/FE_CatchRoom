'use client';
import React from 'react';
import DownArrowComponent from '@/public/svgComponent/downArrow';
import Black from '@/public/svgComponent/marker/black';
import BottomSheets from '@/components/common/bottomSheets';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import { DROP_DOWN } from '@/constants/catchSale';

const SecondHeader = () => {
  const [dropdownTitle, setDropdownTitle] = useRecoilState(dropdownState);
  const setModal = useSetRecoilState(outerBottomSheetsControl);

  const handleOptionClick = (title: string) => {
    setDropdownTitle(title);
    setModal(false);
  };

  return (
    <div className="flex justify-between w-full p-5 items-center">
      <div className="font-bold text-t2">총 12건</div>
      <div className="flex gap-1 text-p2">
        {/* 드롭다운 UI 나오면 변경 예정 */}
        <div className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[20px]">
          <Black />
          전체
          <DownArrowComponent />
        </div>
        <BottomSheets
          title={dropdownTitle}
          outerControl={true}
          buttonSelect="dropdown"
        >
          <div className="flex flex-col gap-7 items-center text-t1 font-bold pb-5">
            {DROP_DOWN.map((item) => {
              return (
                <p key={item.name} onClick={() => handleOptionClick(item.name)}>
                  {item.name}
                </p>
              );
            })}
          </div>
        </BottomSheets>
      </div>
    </div>
  );
};

export default SecondHeader;
