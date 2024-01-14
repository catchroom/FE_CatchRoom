'use client';

import HeartButton from '@/components/common/heartButton';
import React, { useState } from 'react';

const RightButton = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    // 추후 상품 등록자인지,일반 유저인지 id값을 비교하여
    // 찜하기 버튼 or 수정&삭제 버튼을 표시하는 기능이 필요함.
    <>
      <div className="flex items-center">
        <HeartButton isButtonActive={isActive} stateHandler={activeHandler} />
      </div>
    </>
  );
};

export default RightButton;
