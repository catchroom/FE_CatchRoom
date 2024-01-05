import ThreeDotSVG from '@/public/svgComponent/threeDot';
import React from 'react';

const TopButtons = ({ state }: { state: string }) => {
  const outDated = state === 'outDated' ? true : false;
  return (
    <div className="flex py-2 justify-end">
      {state === 'onSale' ? (
        <ThreeDotSVG />
      ) : (
        <div className="flex gap-1 text-text-sub ">
          <button
            disabled={outDated ? false : true}
            className={`${outDated ? 'opacity-100' : 'opacity-30'} `}
          >
            수정
          </button>
          <button>삭제</button>
        </div>
      )}
    </div>
  );
};

export default TopButtons;
