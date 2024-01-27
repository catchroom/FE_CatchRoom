'use client';
import React, { useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { searchDropdownState } from '@/atoms/catchSale/dropdownAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import { DROP_DOWN_TWO } from '@/constants/catchSale';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import {
  isRegionCheckedState,
  regionBooleanIndex,
  regionIndex,
} from '@/atoms/search-detail/searchStates';
import { useDeadLinePageItems } from '@/api/deadline-items/query';
import { formatDate } from '@/utils/formatDate';

const BottomHeader = () => {
  const resetIsRegionChecked = useResetRecoilState(isRegionCheckedState);
  const resetRegionIndex = useResetRecoilState(regionIndex);
  const resetRegionBooleanIndex = useResetRecoilState(regionBooleanIndex);
  const resetDropdownState = useResetRecoilState(searchDropdownState);

  const [dropdownTitle, setDropdownTitle] = useRecoilState(searchDropdownState);
  const setModal = useSetRecoilState(outerBottomSheetsControl);
  const currentDate = useRecoilValue(weekCalendarDate);
  const filter = useRecoilValue(searchDropdownState);
  const region = useRecoilValue(regionIndex);

  useEffect(() => {
    resetIsRegionChecked();
    resetRegionIndex();
    resetRegionBooleanIndex();

    resetDropdownState();
    //eslint-disable-next-line
  }, []);

  const dateFormat = formatDate(currentDate);

  const filterFormat = (): string | undefined => {
    if (filter === '할인율 높은순') return 'HIGH_DISCOUNT';
    if (filter === '낮은 가격순') return 'LOW_PRICE';
  };

  const regionFormat = region.join(',');

  const { data } = useDeadLinePageItems(
    dateFormat,
    filterFormat() || 'LOW_PRICE',
    regionFormat,
    1,
  );

  const handleOptionClick = (title: string) => {
    setDropdownTitle(title);
    setModal(false);
  };

  return (
    <div className="flex items-center justify-between w-full h-[4.75rem] p-5 border-border-sub border-t text-xl text-p1 font-semibold">
      <p className="text-t2 font-bold">총 {data && data.list.length}건</p>
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
