'use client';

import React from 'react';

const ReviewContainer = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between">
        <h1>이용후기</h1>
        <span className="underline decoration-solid cursor-pointer">
          전체보기
        </span>
      </div>
    </div>
  );
};

export default ReviewContainer;
