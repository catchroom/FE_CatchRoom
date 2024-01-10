import { SlideButtonPropsType } from '@/types/common/slideButton/types';
import React from 'react';

/**
 * slide 형식으로 boolean값을 줄 수 있는 Toggle Button 컴포넌트 입니다.
 * @component
 * @param isButtonActive : 버튼의 상태를 전달하는 props입니다. `boolean` (필수)
 * @param stateHandler : 버튼을 클릭할 때 전달되는 핸들러 함수의 props 입니다.  `(e: React.MouseEvent<HTMLInputElement>) => void` (필수)
 * @returns {JSX.Element} SlideButton 컴포넌트 반환
 */

const SlideButton = ({
  isButtonActive,
  stateHandler,
}: SlideButtonPropsType) => {
  return (
    <div className="p-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            checked={isButtonActive}
            onChange={stateHandler}
          />
          <div
            className={`w-10 h-6 rounded-full ${
              isButtonActive ? 'bg-action-primary' : 'bg-surface-secondary'
            } transition-all duration-300`}
          ></div>
          <div
            className={`absolute w-5 h-5 rounded-full bg-white left-0.5 top-0.5 transform transition-all duration-500 shadow ${
              isButtonActive ? 'translate-x-4' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SlideButton;
