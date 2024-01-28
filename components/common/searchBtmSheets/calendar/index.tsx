'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { SEARCH_DEFAULT } from '@/constants/search-detail';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import CalendarComponent from '@/components/common/calendar';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import {
  isAllDayCheckedState,
  rangeDate,
} from '@/atoms/search-detail/searchStates';

const CalendarBottomSheet = ({
  buttonStyle,
}: {
  buttonStyle: 'search' | 'dropdown';
}) => {
  const [isCalendarChecked, setIsCalendarChecked] =
    useRecoilState<boolean>(isAllDayCheckedState);
  const [range] = useRecoilState(rangeDate);

  const handleDateSelectAll = () => {
    setIsCalendarChecked(!isCalendarChecked);
  };

  return (
    <>
      {SEARCH_DEFAULT.props.map((prop, index) => {
        if (index !== 1) return;
        let placeholderValue = prop.placeholder;

        if (index === 1) {
          if (range && range.from && range.to) {
            let dateFormat = 'MM월 dd일(E)';

            if (buttonStyle === 'dropdown') dateFormat = 'MM.dd E';

            const fromDate = `${format(range.from, dateFormat, {
              locale: ko,
            }).toString()}`;
            const toDate = `${format(range.to, dateFormat, {
              locale: ko,
            }).toString()}`;

            if (fromDate === toDate) placeholderValue = fromDate;
            else placeholderValue = fromDate + ` - ` + toDate;
          }

          if (isCalendarChecked) placeholderValue = '날짜 무관';
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
            <div className="my-6 pb-2 w-full">
              {prop.icon === 'calendar' && (
                <>
                  <CheckBoxComponent
                    id="calendar"
                    labelText="날짜 무관"
                    isLabelTextUnderline
                    handleSelectState={handleDateSelectAll}
                    isBoxChecked={isCalendarChecked}
                  />
                  <div className="w-full h-[530px]">
                    <CalendarComponent
                      useSingleDate={false}
                      searchAll={isCalendarChecked}
                    />
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

export default CalendarBottomSheet;
