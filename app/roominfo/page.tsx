'use client';
import HeartButton from '@/components/common/heartButton';
import RateIcon from '@/components/roomInfo/body/rateIcon';
import LeftButtonIcon from '@/components/roomInfo/header/leftButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState<string>('info');

  type ButtonType = 'info' | 'location' | 'infoDetails';
  const handleButtonClick = (button: ButtonType) => {
    setActiveButton(button);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // 로딩 중에 보여줄 스켈레톤 UI
    // 추후 비동기 작업 시 작성 예정
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full  min-h-screen flex flex-col">
        {/* header 컴포넌트 */}
        <div className="fixed top-0 flex justify-between w-full max-w-[476px] h-[50px p-4 z-10">
          <button onClick={() => router.back()}>
            <LeftButtonIcon />
          </button>
          <div className="text-white text-h3 font-normal mr-1 flex items-center">
            <button>수정</button>/<button>삭제</button>
          </div>
        </div>
        {/* 숙소 이미지 컴포넌트 */}
        <div className="relative w-full h-[390px]  bg-blue-gray-50">
          <Image
            src="/sample/room1.jpg"
            layout="fill"
            objectFit="cover"
            alt="숙소사진"
          />
          <div className="absolute bottom-0 right-0 rounded-full bg-white flex items-center justify-center w-24 h-10 font-extrabold mr-4 mb-6">
            1/20
          </div>
        </div>
        {/* 숙소 정보 컴포넌트 */}
        <div className="w-full py-8 px-5">
          <div className="flex flex-wrap items-center justify-start">
            <div className="flex flex-wrap items-center">
              <p className="text-h2 font-bold mr-2">제주신라호텔</p>
              <p className="text-p3 font-semibold bg-gray-300 p-1">
                스탠다드 더블
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start mt-2">
            <div className="flex flex-wrap text-p2 text-gray-600">
              <span>구매가&nbsp;</span>
              <p className="line-through">180,000원</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            <div className="flex flex-wrap items-center">
              <p className=" text-main font-bold">30%</p>
              <p className="ml-2 text-h1 font-semibold">180,000원</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            <div className="flex flex-wrap mt-1 items-center">
              <RateIcon />
              <p className=" text-rate font-bold">4.5&nbsp;(1,234)</p>
            </div>
          </div>
          {/* 체크인 컴포넌트 (공동) */}
          <div className="relative flex flex-wrap w-full h-[90px] mt-2 items-center justify-around gap-0 bg-gray-250">
            <div className="text-center">
              <div className="text-p1 font-medium text-gray-600">체크인</div>
              <div className="text-p1 font-semibold text-gray-800">
                2023-12-08 (월)
              </div>
              <div className="text-p1 font-semibold text-gray-800">15:00</div>
            </div>
            <div className="absolute h-[37px] w-[1px] bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="text-center">
              <div className="text-p1 font-medium text-gray-600">체크아웃</div>
              <div className="text-p1 font-semibold text-gray-800">
                2023-12-09 (화)
              </div>
              <div className="text-p1 font-semibold text-gray-800">11:00</div>
            </div>
          </div>
          {/* 판매자 추가설명 */}
          <div className="flex flex-col w-full items-start justify-center my-6">
            <p className="font-bold">판매자 추가설명</p>
            <div className="w-full mt-1 p-3 border border-gray-300 font-normal">
              어제 헤어져서 이제 못갈 것 같습니다..
            </div>
          </div>
        </div>
        {/* body-navbar-section */}
        <div className=" w-full h-[400px] mb-[83px]">
          <div className="flex flex-wrap border-b-[2px] border-gray-300  justify-around">
            <div
              className={`relative flex w-1/3 h-[34px] ${
                activeButton === 'info' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <button
                className="flex w-full h-full px-3 justify-center"
                onClick={() => handleButtonClick('info')}
              >
                객실 정보
              </button>
              {activeButton === 'info' && (
                <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
              )}
            </div>
            <div
              className={`relative flex w-1/3 h-[34px] ${
                activeButton === 'location' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <button
                className="flex w-full h-full px-3 justify-center"
                onClick={() => handleButtonClick('location')}
              >
                숙소 위치
              </button>
              {activeButton === 'location' && (
                <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
              )}
            </div>
            <div
              className={`relative flex w-1/3 h-[34px] ${
                activeButton === 'infoDetails' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <button
                className="flex w-full h-full px-3 justify-center"
                onClick={() => handleButtonClick('infoDetails')}
              >
                숙소 정보
              </button>
              {activeButton === 'infoDetails' && (
                <div className="absolute bottom-0 w-full h-[2px] bg-black rounded-full" />
              )}
            </div>
          </div>
          <div className="pt-8 px-5 mb-[84px] w-full h-full">
            {/* 객실 정보에 해당하는 컴포넌트 */}
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
        </div>
        {/* footer 컴포넌트 */}
        <div className="fixed flex justify-center bottom-0 w-full max-w-[476px] h-[84px] bg-white border border-t-black z-10">
          <div className="flex items-center justify-between w-full">
            <div className="mx-3">
              <HeartButton />
            </div>
            <button className="flex justify-center items-center mr-3 w-2/5 h-[54px] border border-black">
              채팅하기
            </button>
            <button className="flex justify-center items-center mr-5 w-3/5 h-[54px] bg-black text-white">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
