'use client';

import {
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/checkbox';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import {
  REGION_NAMES,
  ROOM_CATEGORIES,
  SEARCH_DEFAULT,
} from '@/constants/serchpage';
// import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import UserCounterComponent from './userCounter';
import CalendarComponent from '@/components/common/calendar';
import { rangeDate } from '@/atoms/calendar/calendarAtoms';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const SearchBtnComponent = () => {
  /*=============================== [지역 버튼] ================================== */
  const [isRegionChecked, setIsRegionChecked] = useState<boolean>(true);
  const [regionBtnIdx, setRegionBtnIdx] = useState<number[]>(
    Array(REGION_NAMES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [regionBtnBlArr, setRegionBtnBlArr] = useState<boolean[]>(
    Array(REGION_NAMES.length).fill(true),
  );

  const selectedRegionNames = regionBtnIdx.map((index) => REGION_NAMES[index]);

  const handleRegionSelectAll = () => {
    setIsRegionChecked(!isRegionChecked);
    const allIndexes = Array.from(
      { length: REGION_NAMES.length },
      (_, index) => index,
    );
    setRegionBtnIdx(isRegionChecked ? [] : allIndexes);
    setRegionBtnBlArr(Array(REGION_NAMES.length).fill(!isRegionChecked));
  };

  const handleRegionBtnClick = (index: number) => {
    const updatedRegionSelected = [...regionBtnBlArr];
    updatedRegionSelected[index] = !updatedRegionSelected[index];
    const newRegionBtnIdx = updatedRegionSelected
      .map((selected, idx) => (selected ? idx : -1))
      .filter((idx) => idx !== -1);

    setRegionBtnIdx(newRegionBtnIdx);
    setRegionBtnBlArr(updatedRegionSelected);
    setIsRegionChecked(
      updatedRegionSelected.every((selected) => selected) &&
        updatedRegionSelected.length > 0,
    );
  };

  const regionButtons = REGION_NAMES.map((buttonName: string, index) => (
    <button
      key={index}
      className={`w-full h-[3rem] p-auto bg-white border border-border-sub rounded-md 
      ${regionBtnBlArr[index] ? 'bg-focus border-focus text-focus' : ''}`}
      onClick={() => handleRegionBtnClick(index)}
    >
      {buttonName}
    </button>
  ));

  /*====================================[달력 버튼]================================ */

  const [isCalendarChecked, setIsCalendarChecked] = useState<boolean>(true);
  const [range] = useRecoilState(rangeDate);

  const handleDateSelectAll = () => {
    setIsCalendarChecked(!isCalendarChecked);
  };

  /*====================================[숙소종류 버튼]================================ */

  const [isRoomChecked, setIsRoomChecked] = useState<boolean>(true);
  const [roomBtnIdx, setRoomBtnIdx] = useState<number[]>(
    Array(ROOM_CATEGORIES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [isRoomBtnSelected, setIsRoomBtnSelected] = useState<boolean[]>(
    Array(ROOM_CATEGORIES.length).fill(true),
  );

  const selectedRoomNames = roomBtnIdx.map((index) => ROOM_CATEGORIES[index]);

  const handleRoomSelectAll = () => {
    setIsRoomChecked(!isRoomChecked);
    const allIndexes = Array.from(
      { length: ROOM_CATEGORIES.length },
      (_, index) => index,
    );
    setRoomBtnIdx(isRoomChecked ? [] : allIndexes);
    setIsRoomBtnSelected(Array(ROOM_CATEGORIES.length).fill(!isRoomChecked));
  };

  const handleRoomBtnClick = (index: number) => {
    const updateRoomSelected = [...isRoomBtnSelected];
    updateRoomSelected[index] = !updateRoomSelected[index];
    const updatedRoomBtnIdx = updateRoomSelected
      .map((selected, idx) => (selected ? idx : -1))
      .filter((idx) => idx !== -1);

    setRoomBtnIdx(updatedRoomBtnIdx);
    setIsRoomBtnSelected(updateRoomSelected);
    setIsRoomChecked(
      updateRoomSelected.every((selected) => selected) &&
        updateRoomSelected.length > 0,
    );
  };

  const roomCategoryButtons = ROOM_CATEGORIES.map(
    (buttonName: string, index) => (
      <button
        key={index}
        className={`w-full h-[3rem] p-auto bg-white border border-border-sub rounded-md 
      ${isRoomBtnSelected[index] ? 'bg-focus border-focus text-focus' : ''}`}
        onClick={() => handleRoomBtnClick(index)}
      >
        {buttonName}
      </button>
    ),
  );
  /*==================================[인원 수 버튼]================================= */

  const [adultCount] = useRecoilState(adultCountState);
  const [childCount] = useRecoilState(childCountState);

  /*============================================================================ */

  return (
    <div className=" w-full flex flex-col items-center text-xl">
      {SEARCH_DEFAULT.props.map((prop, index) => {
        let placeholderValue = prop.placeholder;

        if (index === 0 && selectedRegionNames.length > 0) {
          placeholderValue = selectedRegionNames.join(', ');
          if (placeholderValue.length > 20) {
            const selectedValue = placeholderValue.slice(0, 20);
            const reduceComma = selectedValue.lastIndexOf(',');
            placeholderValue =
              selectedValue.slice(0, reduceComma) +
              ` 등 총 ${selectedRegionNames.length}개`;
          }
          if (selectedRegionNames.length === REGION_NAMES.length) {
            placeholderValue = '모든 지역';
          }
        }

        if (index === 1) {
          if (range && range.from && range.to) {
            const fromDate = `${format(range.from, 'MM월 dd일(E)', {
              locale: ko,
            }).toString()} `;
            const toDate = `- ${format(range.to, 'MM월 dd일(E)', {
              locale: ko,
            }).toString()}`;
            placeholderValue = fromDate + toDate;
          }
          if (isCalendarChecked) {
            placeholderValue = '날짜 무관';
          }
        }

        if (index === 2 && selectedRoomNames.length > 0) {
          placeholderValue = selectedRoomNames.join(', ');
          if (selectedRoomNames.length === ROOM_CATEGORIES.length) {
            placeholderValue = '모든 숙소 유형';
          }
        }

        if (index === 3) {
          if (adultCount > 0 && childCount > 0) {
            placeholderValue = `성인 ${adultCount}명, 아동 ${childCount}명`;
          } else if (adultCount > 0) {
            placeholderValue = `성인 ${adultCount}명`;
          } else if (childCount > 0) {
            placeholderValue = `아동 ${childCount}명`;
          }
        }

        return (
          <BottomSheets
            key={index}
            icon={prop.icon}
            title={prop.BottomSheetTitle}
            innerTitle={prop.BottomSheetTitle}
            placeholder={placeholderValue}
            buttonSelect="search"
            closeButton
            innerButtonTitle={'확인'}
          >
            <div className="mt-5 w-full">
              {prop.icon === 'pin' && (
                <>
                  <CheckBoxComponent
                    id="pin"
                    labelText="전체선택"
                    isLabelTextUnderline
                    handleSelectState={handleRegionSelectAll}
                    isBoxChecked={isRegionChecked}
                  />
                  <div className="grid grid-cols-4 w-full h-[13.5rem] gap-2 mt-6">
                    {regionButtons}
                  </div>
                </>
              )}
              {prop.icon === 'calendar' && (
                <>
                  <CheckBoxComponent
                    id="calendar"
                    labelText="날짜 무관"
                    isLabelTextUnderline
                    handleSelectState={handleDateSelectAll}
                    isBoxChecked={isCalendarChecked}
                  />
                  <div className="w-full h-[580px] mt-4">
                    <CalendarComponent
                      useSingleDate={false}
                      searchAll={isCalendarChecked}
                    />
                  </div>
                </>
              )}
              {prop.icon === 'house' && (
                <>
                  <CheckBoxComponent
                    id="house"
                    labelText="전체선택"
                    isLabelTextUnderline
                    handleSelectState={handleRoomSelectAll}
                    isBoxChecked={isRoomChecked}
                  />
                  <div className="grid grid-cols-4 grid-rows-2 w-full h-[6.5rem] gap-2 mt-6">
                    {roomCategoryButtons}
                  </div>
                </>
              )}
              {prop.icon === 'person' && (
                <div className="flex flex-col justify-between w-full h-[7rem] p-auto bg-white border border-border-sub rounded-md p-5">
                  <div className="flex flex-row justify-between">
                    <p>성인</p>
                    <UserCounterComponent
                      countState="adult"
                      allCount={adultCount + childCount}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>아동</p>
                    <UserCounterComponent
                      countState="child"
                      allCount={adultCount + childCount}
                    />
                  </div>
                </div>
              )}
            </div>
          </BottomSheets>
        );
      })}
    </div>
  );
};

export default SearchBtnComponent;
