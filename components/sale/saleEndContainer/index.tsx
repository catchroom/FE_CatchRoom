'use client';
import React from 'react';
import SetTime from '../setTime';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { hourState, minuteState, timeState } from '@/atoms/sale/timeAtom';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import { outerDatePickerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
// import { MobileTimePicker } from '@mui/x-date-pickers';
//import { TextField } from '@mui/material';

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// const CustomToolbar = ({ time }: { time: string }) => (
//   <>
//     <div>판매 종료 시간</div>
//     <div>{time}</div>
//   </>
// );

const SaleEndContainer = () => {
  //const [time, setTime] = useState<string | null>('');
  const time = useRecoilValue(timeState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);

  const setModalOpen = useSetRecoilState(outerDatePickerBottomSheetsControl);

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const title =
    time.toString() +
    ' ' +
    (hour < 10
      ? '0' + hour.toString() + ':' + minute.toString()
      : hour.toString() + ':' + minute.toString());

  return (
    <div className="w-full flex flex-col mt-5">
      <h2 className="text-h5 font-semibold">판매 종료일 설정</h2>
      <p className="text-p1 opacity-50 mt-1 mb-3">
        판매 종료일 이후 판매글은 미노출 됩니다
      </p>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          minutesStep={1}
          sx={{
            borderColor: '#000000',
          }}
          className="border-border-sub focus:border-border-sub"
          // slots={{
          //   toolbar: CustomToolbar,
          // }}
          slotProps={{
            toolbar: {
              toolbarFormat: '판매 종료 시간',
            },
          }}
        />
      </LocalizationProvider> */}

      <BottomSheetsWithoutCloseBtn
        buttonSelect="timePicker"
        title={title}
        outerControl={true}
        outerControlAtom="datePicker"
      >
        <SetTime />
        <div className="w-full border-t border-border-sub py-5">
          <button
            onClick={handleButtonClick}
            type="button"
            className="w-full bg-action-primary text-text-on text-t2 font-medium p-4 py-2.5 rounded-md transition-colors duration-300 ease-in"
          >
            {title}로 설정하기
          </button>
        </div>
      </BottomSheetsWithoutCloseBtn>
    </div>
  );
};

export default SaleEndContainer;
