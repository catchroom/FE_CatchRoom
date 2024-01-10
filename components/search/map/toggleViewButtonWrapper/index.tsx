import React from 'react';
import ToggleViewButton from '../../toggleViewButton';
import { ToggleViewButtonWrapperProps } from '@/types/search/map/type';

const ToggleViewButtonWrapper = ({
  currentView,
  onViewChange,
}: ToggleViewButtonWrapperProps) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
      <ToggleViewButton currentView={currentView} onViewChange={onViewChange} />
    </div>
  );
};

export default ToggleViewButtonWrapper;
