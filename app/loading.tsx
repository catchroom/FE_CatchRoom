'use client';

import React from 'react';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const loading = () => {
  return (
    <div className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] relative flex flex-col items-center justify-center rounded-full bg-main overflow-hidden">
      <FontAwesomeIcon
        icon={faCarSide as IconProp}
        className="w-11 h-11 text-bg text-center animate-move"
      />
    </div>
  );
};

export default loading;
