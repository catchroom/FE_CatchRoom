'use client';

import { userOutAtom } from '@/atoms/chat/leaveButton';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const UserOut = ({ partnerNickName }: { partnerNickName: string }) => {
  const setOutState = useSetRecoilState(userOutAtom);

  useEffect(() => {
    setOutState(true);

    return () => {
      setOutState(false);
    };
  }, [setOutState]);
  return (
    <div className="w-3/4 mx-auto mb-3">
      <p className="bg-surface px-3 py-2 flex justify-center rounded-md text-t3 text-text-primary">
        {partnerNickName}님이 나갔습니다.
      </p>
    </div>
  );
};

export default UserOut;
