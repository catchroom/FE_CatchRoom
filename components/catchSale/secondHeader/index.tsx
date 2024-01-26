'use client';
import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import { DROP_DOWN } from '@/constants/catchSale';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';
import { totalSizeState } from '@/atoms/catchSale/totalSizeAtom';

const SecondHeader = () => {
  const [dropdownTitle, setDropdownTitle] = useRecoilState(dropdownState);
  const setModal = useSetRecoilState(outerBottomSheetsControl);
  const size = useRecoilValue(totalSizeState);

  const handleOptionClick = (title: string) => {
    setDropdownTitle(title);
    setModal(false);
  };

  return (
    <div className="w-full max-w-[480px] fixed z-20 mt-[52px]">
      <div className="flex   justify-between w-full p-5 items-center  bg-bg">
        <div className="font-bold text-t2">총 {size}건</div>
        <div className="flex gap-1 text-p2">
          <RegionBottomSheet buttonStyle="dropdown" usePinIcon={true} />
          <BottomSheetsWithoutCloseBtn
            title={dropdownTitle}
            outerControl={true}
            buttonSelect="dropdown"
          >
            <div className="flex flex-col py-3 gap-7 items-center text-t1 font-bold">
              {DROP_DOWN.map((item) => {
                return (
                  <p
                    key={item.name}
                    onClick={() => handleOptionClick(item.name)}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </BottomSheetsWithoutCloseBtn>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
