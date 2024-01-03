import React from 'react';
import LeftButton from './leftButton';
import RightButton from './rightButton';

const HeaderComponent = () => {
  return (
    <div className="fixed top-0 flex justify-between w-full max-w-[476px] h-[50px p-4 z-10">
      <LeftButton />
      <RightButton />
    </div>
  );
};

export default HeaderComponent;
