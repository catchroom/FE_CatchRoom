'use client';
import React, { useEffect } from 'react';
import {
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/searchStates';
import { useRecoilState } from 'recoil';
import { SEARCH_DEFAULT } from '@/constants/search-detail';
import BottomSheets from '@/components/common/bottomSheets';
import UserCounterComponent from '@/components/searchroom/bodyComponent/searchComponent/userCounter';

const CustomerBottomSheet = ({
  buttonStyle,
}: {
  buttonStyle: 'search' | 'dropdown';
}) => {
  const [adultCount] = useRecoilState(adultCountState);
  const [childCount] = useRecoilState(childCountState);

  useEffect(() => {
    const debounce = setTimeout(() => {
      // fetch(adultCount,childCount) 등등 api에 사용 예정
      console.log('디바운스된 성인, 아동 수 :', adultCount, ', ', childCount);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [adultCount, childCount]);

  return (
    <>
      {SEARCH_DEFAULT.props.map((prop, index) => {
        if (index !== 3) return;
        let placeholderValue = prop.placeholder;

        if (index === 3)
          if (adultCount > 0 && childCount > 0) {
            placeholderValue = `성인 ${adultCount}명, 아동 ${childCount}명`;
          } else if (adultCount > 0) {
            placeholderValue = `성인 ${adultCount}명`;
          } else if (childCount > 0) {
            placeholderValue = `아동 ${childCount}명`;
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
            <div className="my-5 w-full">
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
    </>
  );
};

export default CustomerBottomSheet;
