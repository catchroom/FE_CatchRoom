'use client';

import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import { DROP_DOWN } from '@/constants/catchSale';
import { sortState } from '@/atoms/search-result/sortAtom';
import { accommodationsCountState } from '@/atoms/search-result/countAtom';
import { useRecoilValue } from 'recoil';

const ProductListControls = () => {
  const [dropdownTitle, setDropdownTitle] = useRecoilState(dropdownState);
  const setModal = useSetRecoilState(outerBottomSheetsControl);
  const setSortOption = useSetRecoilState(sortState);
  const accommodationsCount = useRecoilValue(accommodationsCountState);

  const handleOptionClick = (selectedOption: string) => {
    const option = DROP_DOWN.find((item) => item.name === selectedOption);
    if (option) {
      setDropdownTitle(option.name);
      setSortOption(option.value);
      setModal(false);
    }
  };
  const sortOption = useRecoilValue(sortState);

  useEffect(() => {
    const currentSortOption = DROP_DOWN.find(
      (option) => option.value === sortOption,
    );
    if (currentSortOption) {
      setDropdownTitle(currentSortOption.name);
    }
  }, [sortOption, setDropdownTitle]);

  return (
    <div className="fixed z-10 flex items-center justify-between w-full max-w-[480px] p-5 mt-32 border-border-sub text-p1 font-semibold">
      <p className="text-t2 font-bold">총 {accommodationsCount}건</p>
      <div className="flex">
        <BottomSheetsWithoutCloseBtn
          title={dropdownTitle}
          outerControl={true}
          buttonSelect="sortOptions"
        >
          <div className="flex flex-col py-3 gap-7 items-center text-t1 font-bold">
            {DROP_DOWN.map((item) => {
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

export default ProductListControls;
