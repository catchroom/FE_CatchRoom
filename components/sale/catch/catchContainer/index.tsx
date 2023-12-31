import React from 'react';
import CatchDropContainer from '../catchDropDown';

const CatchContainer = () => {
  return (
    <div className="w-[355px] flex mt-5 flex-col">
      <h2 className="text-p1 font-bold">캐치특가 자동 설정</h2>
      {/* 토글 버튼 들어갈 자리 */}
      <p className="text-p2">
        체크인 2일전까지 팔리지 않을 경우 빠른 판매를 위해, 미리 설정한 가격으로
        자동조정되어 홈 상단에 노출됩니다.
      </p>
      <CatchDropContainer />
    </div>
  );
};

export default CatchContainer;
