'use client';

import { adultCountState, childCountState } from '@/atoms/searchroom/checkbox';
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

const SearchBtnComponent = () => {
  const [isRegionChecked, setIsRegionChecked] = useState<boolean>(true);
  const [isRoomChecked, setIsRoomChecked] = useState<boolean>(true);
  const [adultCount] = useRecoilState(adultCountState);
  const [childCount] = useRecoilState(childCountState);

  const [regionBtnsIdx, setRegionBtnsIdx] = useState<number[]>(
    Array(REGION_NAMES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [isRegionBtnSelected, setIsRegionBtnSelected] = useState<boolean[]>(
    Array(REGION_NAMES.length).fill(true),
  );

  const [roomBtnsIdx, setRoomBtnsIdx] = useState<number[]>(
    Array(ROOM_CATEGORIES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [isRoomBtnSelected, setIsRoomBtnSelected] = useState<boolean[]>(
    Array(ROOM_CATEGORIES.length).fill(true),
  );

  const selectedRegionNames = regionBtnsIdx.map((index) => REGION_NAMES[index]);

  const selectedRoomNames = roomBtnsIdx.map((index) => ROOM_CATEGORIES[index]);

  console.log(regionBtnsIdx);
  console.log(roomBtnsIdx);

  const handleRegionSelectAll = () => {
    setIsRegionChecked(!isRegionChecked);
    const allIndexes = Array.from(
      { length: REGION_NAMES.length },
      (_, index) => index,
    );
    setRegionBtnsIdx(isRegionChecked ? [] : allIndexes);
    setIsRegionBtnSelected(Array(REGION_NAMES.length).fill(!isRegionChecked));
  };

  const handleRoomSelectAll = () => {
    setIsRoomChecked(!isRoomChecked);
    const allIndexes = Array.from(
      { length: ROOM_CATEGORIES.length },
      (_, index) => index,
    );
    setRoomBtnsIdx(isRoomChecked ? [] : allIndexes);
    setIsRoomBtnSelected(Array(ROOM_CATEGORIES.length).fill(!isRoomChecked));
  };

  const handleRegionBtnClick = (index: number) => {
    const updatedIsRegionBtnSelected = [...isRegionBtnSelected];
    updatedIsRegionBtnSelected[index] = !updatedIsRegionBtnSelected[index];
    const updatedRegionBtnsIdx = updatedIsRegionBtnSelected
      .map((selected, idx) => (selected ? idx : -1))
      .filter((idx) => idx !== -1);

    setRegionBtnsIdx(updatedRegionBtnsIdx);
    setIsRegionBtnSelected(updatedIsRegionBtnSelected);
    setIsRegionChecked(
      updatedIsRegionBtnSelected.every((selected) => selected) &&
        updatedIsRegionBtnSelected.length > 0,
    );
  };

  const handleRoomBtnClick = (index: number) => {
    const updatedIsRoomBtnSelected = [...isRoomBtnSelected];
    updatedIsRoomBtnSelected[index] = !updatedIsRoomBtnSelected[index];
    const updatedRoomBtnsIdx = updatedIsRoomBtnSelected
      .map((selected, idx) => (selected ? idx : -1))
      .filter((idx) => idx !== -1);

    setRoomBtnsIdx(updatedRoomBtnsIdx);
    setIsRoomBtnSelected(updatedIsRoomBtnSelected);
    setIsRoomChecked(
      updatedIsRoomBtnSelected.every((selected) => selected) &&
        updatedIsRoomBtnSelected.length > 0,
    );
  };

  const regionButtons = REGION_NAMES.map((buttonName: string, index) => (
    <button
      key={index}
      className={`w-[5.09375.rem] h-[3rem] p-auto bg-white border border-border-sub rounded-md 
      ${isRegionBtnSelected[index] ? 'bg-focus border-focus text-focus' : ''}`}
      onClick={() => handleRegionBtnClick(index)}
    >
      {buttonName}
    </button>
  ));

  const roomCategoryButtons = ROOM_CATEGORIES.map(
    (buttonName: string, index) => (
      <button
        key={index}
        className={`w-[5.09375.rem] h-[3rem] p-auto bg-white border border-border-sub rounded-md 
      ${isRoomBtnSelected[index] ? 'bg-focus border-focus text-focus' : ''}`}
        onClick={() => handleRoomBtnClick(index)}
      >
        {buttonName}
      </button>
    ),
  );

  /* ----------------------------------------------------------------------------------- */

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
          >
            <div className="mt-3 w-full">
              <div className="mb-6">
                {prop.icon === 'pin' && (
                  <CheckBoxComponent
                    id="pin"
                    labelText="전체선택"
                    isLabelTextUnderline
                    handleSelectState={handleRegionSelectAll}
                    isBoxChecked={isRegionChecked}
                  />
                )}
                {prop.icon === 'calendar' && (
                  <CheckBoxComponent
                    id="calendar"
                    labelText="날짜무관"
                    isLabelTextUnderline
                    // 달력 api 사용 시 수정예정
                    isBoxChecked={false}
                  />
                )}
                {prop.icon === 'house' && (
                  <CheckBoxComponent
                    id="house"
                    labelText="전체선택"
                    isLabelTextUnderline
                    handleSelectState={handleRoomSelectAll}
                    isBoxChecked={isRoomChecked}
                  />
                )}
              </div>
              {prop.icon === 'pin' && (
                <div className="grid grid-cols-4 w-full h-[13.5rem] gap-2">
                  {regionButtons}
                </div>
              )}
              {prop.icon === 'house' && (
                <div className="grid grid-cols-4 grid-rows-2 w-full h-[6.5rem] gap-2">
                  {roomCategoryButtons}
                </div>
              )}
              {prop.icon === 'person' && (
                <div className="flex flex-col justify-between w-[5.09375.rem] h-[7rem] p-auto bg-white border border-border-sub rounded-md p-5">
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
