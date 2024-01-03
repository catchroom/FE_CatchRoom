import React from 'react';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/atoms/roomInfo/navbarButton';
import Image from 'next/image';

const NavbarPageComponent = () => {
  const [activeButton] = useRecoilState(activeButtonState);

  return (
    <div className="pt-8 px-5 mb-[84px] w-full h-full">
      {activeButton === 'info' && (
        <>
          <div className="flex flex-wrap h-[110px] items-center justify-between">
            <div className="relative w-1/3 h-full">
              <Image
                src="/sample/room2.jpg"
                layout="fill"
                objectFit="cover"
                alt="숙소사진"
              />
            </div>
            <div className="flex w-2/3 h-full justify-center items-center bg-gray-300">
              야놀자 정보 불러옴
            </div>
          </div>
          <div className="flex flex-wrap w-full h-[140px] mt-4">
            <div className="flex w-full h-full justify-center items-center bg-gray-300">
              야놀자 정보 불러옴
            </div>
          </div>
        </>
      )}
      {/* 숙소 위치에 해당하는 컴포넌트 */}
      {activeButton === 'location' && (
        <div className="w-full h-[235px]">
          <div className="flex flex-wrap w-full justify-between text-p2">
            <p>제주 제주시 동한두기길 23 2층</p>
            <p>복사</p>
          </div>
          <div className="relative w-full h-[205px] mt-3">
            <Image
              src="/sample/map.png"
              layout="fill"
              objectFit="cover"
              alt="숙소사진"
            />
          </div>
        </div>
      )}
      {/* 숙소 정보에 해당하는 컴포넌트 */}
      {activeButton === 'infoDetails' && (
        <div className="w-full h-[235px] ">
          <div className="flex flex-col w-full h-full items-center justify-center text-p2 bg-gray-300">
            내용
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarPageComponent;
