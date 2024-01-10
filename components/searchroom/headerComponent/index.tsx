// import Header from '@/components/common/header';
import React from 'react';

const HeaderComponent = () => {
  return (
    <>
      {/* 공동컴포넌트가 수정되면, 교체 될 예정! */}
      {/* <Header title="숙소 찾기" showBackButton={true} showMoreButton={true} /> */}
      <div className="flex w-full h-14 p-4 items-center justify-center bg-gray-100 border-gray-300 border-b-2 text-t1 font-semibold">
        숙소 찾기
        <button>검색</button>
      </div>
    </>
  );
};

export default HeaderComponent;
