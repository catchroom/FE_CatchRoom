import DivideWrapper from '@/components/mypage/divideWrapper';
import React from 'react';
import Divide from './divide';

const page = () => {
  return (
    <div className="w-full h-full px-5 pt-3">
      <DivideWrapper divideCase="SALE">
        <Divide />
      </DivideWrapper>
    </div>
  );
};

export default page;
