import React from 'react';
import CheckIcon from '@/public/svg/check-circle.svg';
import YanoljaLogo from '@/public/svg/Yanolja_CI 1.svg';
import { CompleteMessageProps } from '@/types/complete/types';
import Link from 'next/link';

const CompleteMessage = ({ nickName }: CompleteMessageProps) => {
  return (
    <div className="flex flex-col justify-center  items-center mb-8">
      <div className="flex gap-1 justify-center">
        <h2 className="text-h3 text-center font-bold leading-8 text-gray-1000  mb-6">
          결제완료
        </h2>
        <CheckIcon />
      </div>
      <div className="flex flex-col justify-center  items-center gap-2">
        <div className="">
          <p className="text-t1 text-center text-text-sub font-semibold">
            해당 숙박권은 {nickName}님에게
          </p>
          <p className="text-t1 text-center text-text-sub font-semibold">
            정상적으로 양도되었어요!
          </p>
        </div>
        <Link href="https://www.yanolja.com/">
          <div className="flex items-center gap-1 ">
            <YanoljaLogo />
            <div className="text-t2 text-text-secondary underline">
              에서 확인하기
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CompleteMessage;
