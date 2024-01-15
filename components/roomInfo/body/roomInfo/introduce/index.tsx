import { INTRODUCE_CATCH_ROOM } from '@/constants/introduce';
import InfoIcon from '@/public/svgComponent/infoMark';
import React from 'react';

const IntroduceComponent = () => {
  return (
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
              <p className="break-keep text-p2 text-text-sub">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntroduceComponent;
