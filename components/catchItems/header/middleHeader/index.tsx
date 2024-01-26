import WeekCalendar from '@/components/common/weekCalendar';
import React from 'react';

const MiddleHeader = () => {
  return (
    <div className="py-3 ">
      <div className="flex px-5 gap-3 items-center justify-between text-xl text-p1 font-semibold">
        <WeekCalendar />
      </div>
    </div>
  );
};

export default MiddleHeader;
