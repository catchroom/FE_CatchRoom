import {
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/searchStates';
import MinusBtnIcon from '@/public/svgComponent/counter/minusBtn';
import PlusBtnIcon from '@/public/svgComponent/counter/plusBtn';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export type UserCounterProps = {
  countState: 'adult' | 'child';
  allCount: number;
};

const UserCounterComponent = ({ countState, allCount }: UserCounterProps) => {
  const [mBtnState, setMBtnState] = useState<boolean>(false);
  const [pBtnState, setPBtnState] = useState<boolean>(true);
  const [count, setCount] = useRecoilState(
    countState === 'adult' ? adultCountState : childCountState,
  );

  useEffect(() => {
    if (count === 0) {
      setMBtnState(false);
    } else {
      setMBtnState(true);
    }

    if (count === 10 || allCount === 10) {
      setPBtnState(false);
    } else {
      setPBtnState(true);
    }
  }, [count, allCount]);

  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="relative flex justify-between w-[80px]">
      <button onClick={onDecrease} disabled={count === 0 ? true : false}>
        <MinusBtnIcon isActive={mBtnState} />
      </button>
      <p className="absolute left-1/2 transform -translate-x-1/2">{count}</p>
      <button
        onClick={onIncrease}
        disabled={count === 10 || allCount === 10 ? true : false}
      >
        <PlusBtnIcon isActive={pBtnState} />
      </button>
    </div>
  );
};

export default UserCounterComponent;
