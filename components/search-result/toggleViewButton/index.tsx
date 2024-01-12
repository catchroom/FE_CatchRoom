import React from 'react';
import ListIcon from '../../../public/svg/list.svg';
import MapIcon from '../../../public/svg/map.svg';
import { ToggleViewButtonProps } from '@/types/search-result/toggleViewButton/types';

const ToggleViewButton = ({
  currentView,
  onViewChange,
}: ToggleViewButtonProps) => {
  let IconComponent: React.ElementType;
  let buttonText: string;

  if (currentView === 'map') {
    IconComponent = ListIcon;
    buttonText = '목록으로 보기';
  } else {
    IconComponent = MapIcon;
    buttonText = '지도로 보기';
  }

  return (
    <button
      className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-gray-900 text-white font-semibold"
      onClick={onViewChange}
    >
      <IconComponent />
      {buttonText}
    </button>
  );
};

export default ToggleViewButton;
