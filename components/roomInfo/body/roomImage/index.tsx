import Image from 'next/image';
import React from 'react';

const RoomImageComponent = () => {
  return (
    <div className="relative w-full h-[390px]  bg-blue-gray-50">
      <Image
        src="/sample/room1.jpg"
        layout="fill"
        objectFit="cover"
        alt="숙소사진"
      />
      <div className="absolute bottom-0 right-0 rounded-full bg-white flex items-center justify-center w-24 h-10 font-normal mr-4 mb-6">
        1/20
      </div>
    </div>
  );
};

export default RoomImageComponent;
