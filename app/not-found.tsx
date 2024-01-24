'use client';

import React from 'react';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const linkedHome = () => {
    router.push('/home');
  };

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-y-8 items-center ">
      <FontAwesomeIcon
        className="w-20 h-20 text-main animate-wiggle"
        icon={faFaceSadTear as IconProp}
      />
      <p className="text-main font-light text-h1 text-center">
        페이지를 찾을 수 없습니다.
      </p>
      <SimpleButton name="홈으로 돌아가기" fn={linkedHome}></SimpleButton>
    </div>
  );
};

export default NotFound;
