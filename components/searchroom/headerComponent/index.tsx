// import Header from '@/components/common/header';
import React from 'react';
import Header from '@/components/common/header';

const HeaderComponent = () => {
  return (
    <>
      <div className="flex w-full h-14 p-4 items-center justify-center bg-gray-100 border-gray-300 border-b-[1px] text-t1 font-semibold">
        <Header title="숙소 찾기" showBackButton={true} />
      </div>
    </>
  );
};

export default HeaderComponent;
