'use client';

import React from 'react';
import EmptyHeartIcon from '@/public/svgComponent/emptyHeart';
import FullHeartIcon from '@/public/svgComponent/fullHeart';
import { HeartButtonPropsType } from '@/types/common/heartButton/types';

/**
 * 찜하기 기능으로 사용할 수 있는 Heart Button 컴포넌트 입니다.
 * @component
 * @param isButtonActive : 버튼의 상태를 전달하는 props입니다. `boolean` (필수)
 * @param stateHandler : 버튼을 클릭할 때 전달되는 핸들러 함수의 props 입니다.  `(e: React.MouseEvent<HTMLInputElement>) => void` (필수)
 * @param stateHandler : 빈 하트의 테두리 색상을 흰색으로 지정할지 결정해주세요.  `boolean` (선택)
 * @returns {JSX.Element} HeartButton 컴포넌트 반환
 */

const HeartButton = ({
  isButtonActive,
  stateHandler,
  width = 24,
  height = 24,
  whiteStroke = false,
}: HeartButtonPropsType) => {
  return (
    <div className="flex items-center justify-center">
      <button onClick={stateHandler} data-testid="heart-button">
        {!isButtonActive ? (
          <EmptyHeartIcon
            width={width}
            height={height}
            whiteStroke={whiteStroke}
          />
        ) : (
          <FullHeartIcon width={width} height={height} />
        )}
      </button>
    </div>
  );
};

export default HeartButton;
