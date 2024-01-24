'use client';
import { useRoomItem } from '@/api/room-info/query';
import { INTRODUCE_CATCH_ROOM } from '@/constants/introduce';
import InfoIcon from '@/public/svgComponent/infoMark';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import React from 'react';

const IntroduceComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { isLoading } = useRoomItem(id);
  return (
    <>
      {isLoading ? (
        <>
          <div className="max-w-[440px] h-[246px] mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 rounded-[4px] border border-border-sub bg-white p-4">
            <div className="flex flex-wrap items-center">
              <InfoIcon />
              <p className="ml-1 text-t1 text-text-primary font-bold">
                캐치룸은 왜 안전할까요?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {INTRODUCE_CATCH_ROOM.data.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-t2 font-bold">{item.title}</p>
                    <p className="break-keep text-p2 text-text-sub">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default IntroduceComponent;
