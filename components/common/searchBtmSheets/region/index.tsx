'use client';
import React, { useEffect, useState } from 'react';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import { REGION_NAMES, SEARCH_DEFAULT } from '@/constants/search-detail';
import { useRecoilState } from 'recoil';
import {
  isRegionCheckedState,
  regionIndex,
} from '@/atoms/search-detail/searchStates';

/** 지역 바텀시트를 사용할 수 있는 컴포넌트입니다.
 * @param buttonStyle - (필수) 트리거 버튼의 스타일을 전달해주셔야 합니다. ('search':  | 'dropdown')
 * @param usePinIcon - 마감임박 페이지에서 핀 아이콘을 사용할지에 대한 여부입니다. (default: false)
 * @returns `<RegionBottomSheet />`
 */
const RegionBottomSheet = ({
  buttonStyle,
  usePinIcon = false,
}: {
  buttonStyle: 'search' | 'dropdown';
  usePinIcon?: boolean;
}) => {
  const [isRegionChecked, setIsRegionChecked] =
    useRecoilState<boolean>(isRegionCheckedState);
  const [regionBtnIdx, setRegionBtnIdx] = useRecoilState<number[]>(regionIndex);
  const [regionBtnBlArr, setRegionBtnBlArr] = useState<boolean[]>(
    Array(REGION_NAMES.length).fill(true),
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      // fetch(regionBtnIdx) 등등 api에 사용 예정
      console.log('디바운스된 지역들 :', regionBtnIdx);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [regionBtnIdx]);

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

  // placeholder용 텍스트
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
          if (buttonStyle === 'dropdown')
            if (selectedRegions.length === 1)
              placeholderValue = `${selectedRegions.at(0)}`;
            else
              placeholderValue = `${selectedRegions.at(0)} 외 ${
                selectedRegions.length - 1
              }곳`;
          if (buttonStyle === 'search')
            if (selectedRegions.length <= 4) {
              const selectedValue = selectedRegions.slice(0, 4);
              placeholderValue = selectedValue.join(', ');
            } else {
              const selectedValue = selectedRegions.slice(0, 4);
              placeholderValue = `${selectedValue.join(', ')} 외 ${
                selectedRegions.length - 4
              }곳`;
            }

          if (selectedRegions.length === REGION_NAMES.length) {
            if (buttonStyle === 'search') placeholderValue = '모든 지역';
            else placeholderValue = '전체';
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
            theme={usePinIcon}
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
