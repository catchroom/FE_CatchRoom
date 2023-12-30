import React from 'react';

type CheckInOutProps = {
  checkIn: {
    date: string;
    time: string;
  };
  checkOut: {
    date: string;
    time: string;
  };
};

const CheckInOut = ({ checkIn, checkOut }: CheckInOutProps) => {
  return (
    <div className="flex justify-between items-center bg-gray-300 mb-4 px-10 py-2 ">
      <div className="text-center">
        <div className="text-sm font-medium text-gray-600">체크인</div>
        <div className="text-lg font-bold text-gray-800">{checkIn.date}</div>
        <div className="text-md font-bold text-gray-800">{checkIn.time}</div>
      </div>
      <div className="border-r border-gray-300 mx-4"></div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-600">체크아웃</div>
        <div className="text-lg font-bold text-gray-800">{checkOut.date}</div>
        <div className="text-md font-bold text-gray-800">{checkOut.time}</div>
      </div>
    </div>
  );
};
export default CheckInOut;
