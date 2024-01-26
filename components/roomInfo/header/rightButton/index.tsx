'use client';

import React, { useEffect, useState } from 'react';
import { useRoomItem, useRoomItemZim } from '@/api/room-info/query';
import HeartButton from '@/components/common/heartButton';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import { useToastAlert } from '@/hooks/useToastAlert';

const HeartButtonComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data } = useRoomItem(id);

  const userZimState = data?.data.isWishChecked;

  const [isActive, setIsActive] = useState(userZimState);
  const mutation = useRoomItemZim();

  const { alertOpenHandler } = useToastAlert(
    isActive ? '찜을 취소했어요.' : '상품을 찜 했어요.',
  );

  useEffect(() => {
    setIsActive(userZimState);
  }, [userZimState]);

  const activeHandler = () => {
    alertOpenHandler();
    mutation.mutate(
      { id },
      {
        onSuccess() {
          setIsActive(!isActive);
        },
      },
    );
  };
  return (
    <>
      <div className="flex items-center">
        <HeartButton isButtonActive={isActive} stateHandler={activeHandler} />
      </div>
    </>
  );
};

export default HeartButtonComponent;
