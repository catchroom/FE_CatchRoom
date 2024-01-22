'use client';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchDropdownState } from '@/atoms/catchSale/dropdownAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import { DROP_DOWN_TWO } from '@/constants/catchSale';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';

const BottomHeader = () => {
  const [dropdownTitle, setDropdownTitle] = useRecoilState(searchDropdownState);
  const setModal = useSetRecoilState(outerBottomSheetsControl);

  const handleOptionClick = (title: string) => {
    setDropdownTitle(title);
    setModal(false);
  };

  return (
    <div className="flex items-center justify-between w-full h-[4.75rem] p-5 border-border-sub border-t text-xl text-p1 font-semibold">
      <p className="text-t2 font-bold">총 12건</p>
      <div className="flex gap-1">
        <RegionBottomSheet buttonStyle="dropdown" usePinIcon={true} />
        <BottomSheetsWithoutCloseBtn
          title={dropdownTitle}
          outerControl={true}
          buttonSelect="dropdown"
        >
          <div className="flex flex-col py-3 gap-7 items-center text-t1 font-bold">
            {DROP_DOWN_TWO.map((item) => {
              return (
                <p key={item.name} onClick={() => handleOptionClick(item.name)}>
                  {item.name}
                </p>
              );
            })}
          </div>
        </BottomSheetsWithoutCloseBtn>
      </div>
    </div>
  );
};

export default BottomHeader;
