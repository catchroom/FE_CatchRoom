'use client';
import React, { useState } from 'react';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import { REGION_NAMES, SEARCH_DEFAULT } from '@/constants/search-detail';

const RegionBottomSheet = () => {
  const [isRegionChecked, setIsRegionChecked] = useState<boolean>(true);
  const [regionBtnIdx, setRegionBtnIdx] = useState<number[]>(
    Array(REGION_NAMES.length)
      .fill(0)
      .map((_, index) => index),
  );
  const [regionBtnBlArr, setRegionBtnBlArr] = useState<boolean[]>(
    Array(REGION_NAMES.length).fill(true),
  );

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

  const selectedRegions = regionBtnIdx.map((index) => REGION_NAMES[index]);

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
  return (
    <>
      {SEARCH_DEFAULT.props.map((prop, index) => {
        if (index !== 0) return;
        let placeholderValue = prop.placeholder;

        if (index === 0 && selectedRegions.length > 0) {
          placeholderValue = selectedRegions.join(', ');
          if (placeholderValue.length > 20) {
            const selectedValue = placeholderValue.slice(0, 20);
            const reduceComma = selectedValue.lastIndexOf(',');
            placeholderValue =
              selectedValue.slice(0, reduceComma) +
              ` 등 총 ${selectedRegions.length}개`;
          }
          if (selectedRegions.length === REGION_NAMES.length) {
            placeholderValue = '모든 지역';
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
            </div>
          </BottomSheets>
        );
      })}
    </>
  );
};

export default RegionBottomSheet;
