import React from 'react';
import { Spinner } from '@material-tailwind/react';

export const SpinnerComponent = () => {
  return (
    <div className="flex justify-center w-full bg-opacity-0">
      <Spinner />
    </div>
  );
};
