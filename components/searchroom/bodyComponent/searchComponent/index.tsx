'use client';

import {
  regionCheckedState,
  roomCheckedState,
} from '@/atoms/searchroom/checkbox';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import {
  REGION_NAMES,
  ROOM_CATEGORIES,
  SEARCH_DEFAULT,
} from '@/constants/serchpage';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

const SearchBtnComponent = () => {
  const [isRegionChecked, setIsRegionChecked] =
    useRecoilState(regionCheckedState);
  const [isRoomChecked, setIsRoomChecked] = useRecoilState(roomCheckedState);

  const handleRegionSelectAll = () => {
    setIsRegionChecked(!isRegionChecked);
  };

  const handleRoomSelectAll = () => {
    setIsRoomChecked(!isRoomChecked);
  };

  useEffect(() => {
    if (isRegionChecked) {
      setIsRegionBtnSelected(new Array(REGION_NAMES.length).fill(true));
      const selectAll = [];
      for (let i = 0; i <= REGION_NAMES.length - 1; i++) {
        selectAll.push(i);
      }
      setRegionBtnsIdx(selectAll);
    } else {
      setIsRegionBtnSelected(new Array(REGION_NAMES.length).fill(false));
      setRegionBtnsIdx([]);
    }
  }, [isRegionChecked]);

  useEffect(() => {
    if (isRoomChecked) {
      setIsRoomBtnSelected(new Array(ROOM_CATEGORIES.length).fill(true));
      const selectAll = [];
      for (let i = 0; i <= ROOM_CATEGORIES.length - 1; i++) {
        selectAll.push(i);
      }
      setRoomBtnsIdx(selectAll);
    } else {
      setIsRoomBtnSelected(new Array(ROOM_CATEGORIES.length).fill(false));
      setRoomBtnsIdx([]);
    }
  }, [isRoomChecked]);

  /* ----------------------------------------------------------------------------------- */

  const [regionBtnsIdx, setRegionBtnsIdx] = useState<number[]>([]);
  const [isRegionBtnSelected, setIsRegionBtnSelected] = useState<boolean[]>(
    new Array(REGION_NAMES.length).fill(false),
  );

  const updatedSelectedBtnsIdx = [...regionBtnsIdx];
  const updatedIsBtnSelected = useMemo(() => {
    const updatedIsBtnSelected = [...isRegionBtnSelected];
    return updatedIsBtnSelected;
  }, [isRegionBtnSelected]);

  const regionBtnClickHandler = (index: number) => {
    updatedIsBtnSelected[index] = !updatedIsBtnSelected[index];

    if (updatedIsBtnSelected[index]) {
      updatedSelectedBtnsIdx.push(index);
    } else {
      const idx = updatedSelectedBtnsIdx.indexOf(index);
      if (idx !== -1) {
        updatedSelectedBtnsIdx.splice(idx, 1);
      }
    }

    setRegionBtnsIdx(updatedSelectedBtnsIdx);
    setIsRegionBtnSelected(updatedIsBtnSelected);
  };

  /* ----------------------------------------------------------------------------------- */

  const [roomBtnsIdx, setRoomBtnsIdx] = useState<number[]>([]);
  const [isRoomBtnSelected, setIsRoomBtnSelected] = useState<boolean[]>(
    new Array(ROOM_CATEGORIES.length).fill(false),
  );

  const updatedSelectedRoomBtnsIdx = [...roomBtnsIdx];
  const updatedIsRoomBtnSelected = useMemo(() => {
    const updatedIsRoomBtnSelected = [...isRoomBtnSelected];
    return updatedIsRoomBtnSelected;
  }, [isRoomBtnSelected]);

  const roomBtnClickHandler = (index: number) => {
    updatedIsRoomBtnSelected[index] = !updatedIsRoomBtnSelected[index];

    if (updatedIsRoomBtnSelected[index]) {
      updatedSelectedRoomBtnsIdx.push(index);
    } else {
      const idx = updatedSelectedRoomBtnsIdx.indexOf(index);
      if (idx !== -1) {
        updatedSelectedRoomBtnsIdx.splice(idx, 1);
      }
    }

    setRoomBtnsIdx(updatedSelectedRoomBtnsIdx);
    setIsRoomBtnSelected(updatedIsRoomBtnSelected);
  };

  /* ----------------------------------------------------------------------------------- */

  const regionButtons = REGION_NAMES.map((buttonName: string, index) => (
    <button
      key={index}
      className={`w-[5.09375.rem] h-[3rem] p-auto bg-white border border-border-sub rounded-md 
      ${isRegionBtnSelected[index] ? 'bg-focus border-focus text-focus' : ''}`}
      onClick={() => regionBtnClickHandler(index)}
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
        onClick={() => roomBtnClickHandler(index)}
      >
        {buttonName}
      </button>
    ),
  );

  /* ----------------------------------------------------------------------------------- */

  const selectedRegionNames = regionBtnsIdx.map((index) => REGION_NAMES[index]);

  const selectedRoomCategoriesNames = roomBtnsIdx.map(
    (index) => ROOM_CATEGORIES[index],
  );

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
        if (index === 2 && selectedRoomCategoriesNames.length > 0) {
          placeholderValue = selectedRoomCategoriesNames.join(', ');
          if (selectedRoomCategoriesNames.length === ROOM_CATEGORIES.length) {
            placeholderValue = '모든 숙소 유형';
          }
        }

        return (
          <BottomSheets
            key={index}
            icon={prop.icon}
            title={prop.BottomSheetTitle}
            placeholder={placeholderValue}
            buttonSelect="search"
            closeButton
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
                    <div>- 2 +</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>아동</p>
                    <div>- 0 +</div>
                  </div>
                </div>
              )}
            </div>
            {/* <button onClick={confirmBtnClickHandler}>Test</button> */}
          </BottomSheets>
        );
      })}
    </div>
  );
};

export default SearchBtnComponent;
