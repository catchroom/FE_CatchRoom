import DivideWrapper from '@/components/mypage/divideWrapper';
import Divide from '@/components/mypage/divider';
import React from 'react';

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
