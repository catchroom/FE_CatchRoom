import React from 'react';
import { isActiveState } from '@/atoms/toggleButton';
import { useRecoilState } from 'recoil';

/**
 * slide 형식으로 boolean값을 줄 수 있는 Toggle Button 컴포넌트 입니다.
 * @component
 * @returns {JSX.Element} ToggleButton 컴포넌트 반환
 */

function ToggleButton() {
  const [isActive, setIsActive] = useRecoilState(isActiveState);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const lineClasses = `toggle__line w-12 h-6 rounded-full border-2 ${
    isActive ? 'bg-black' : 'bg-white'
  } transition-all duration-500`;

  const dotClasses = `toggle__dot absolute w-6 h-6 rounded-full bg-white border-2 left-0 top-0 transform transition-all duration-500 ${
    isActive ? 'translate-x-full' : ''
  }`;

  return (
    <div className="p-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            checked={isActive}
            onChange={handleToggle}
          />
          <div className={lineClasses}></div>
          <div className={dotClasses}></div>
        </div>
      </label>
    </div>
  );
}

export default ToggleButton;
