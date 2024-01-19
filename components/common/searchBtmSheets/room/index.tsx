'use client';
import React, { useEffect, useState } from 'react';
import { ROOM_CATEGORIES, SEARCH_DEFAULT } from '@/constants/search-detail';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';

const RoomBottomSheet = ({
  buttonStyle,
}: {
  buttonStyle: 'search' | 'dropdown';
}) => {
  const [isRoomChecked, setIsRoomChecked] = useState<boolean>(true);
  const [roomBtnIdx, setRoomBtnIdx] = useState<number[]>(
    Array(ROOM_CATEGORIES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [isRoomBtnSelected, setIsRoomBtnSelected] = useState<boolean[]>(
    Array(ROOM_CATEGORIES.length).fill(true),
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      // fetch(roomBtnIdx) 등등 api에 사용 예정
      console.log('디바운스된 숙소유형 :', roomBtnIdx);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [roomBtnIdx]);

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

  const selectedRoomNames = roomBtnIdx.map((index) => ROOM_CATEGORIES[index]);

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
  return (
    <>
      {SEARCH_DEFAULT.props.map((prop, index) => {
        if (index !== 2) return;
        let placeholderValue = prop.placeholder;

        if (index === 2 && selectedRoomNames.length > 0) {
          placeholderValue = selectedRoomNames.join(', ');
          if (selectedRoomNames.length === ROOM_CATEGORIES.length) {
            placeholderValue = '모든 숙소 유형';
          }
        }

        return (
          <BottomSheets
            key={index}
            icon={prop.icon}
            title={prop.BottomSheetTitle}
            innerTitle={prop.BottomSheetTitle}
            placeholder={placeholderValue}
            buttonSelect={buttonStyle}
            closeButton
            innerButtonTitle={'확인'}
          >
            <div className="mt-5 w-full">
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
            </div>
          </BottomSheets>
        );
      })}
    </>
  );
};

export default RoomBottomSheet;
