import React from 'react';
import ToggleViewButton from '../../toggleViewButton';

const ToggleViewButtonWrapper = ({
  currentView,
  onViewChange,
  // eslint-disable-next-line
}: any) => {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
      <ToggleViewButton currentView={currentView} onViewChange={onViewChange} />
    </div>
  );
};

export default ToggleViewButtonWrapper;
