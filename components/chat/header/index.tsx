'use client';

import { useSsrAtom } from '@/atoms/chat/chatContentAtom';
import { dealModalAtom } from '@/atoms/chat/leaveButton';
import LeftArrowIcon from '@/public/svgComponent/leftArrow';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';

const ChatHeader = () => {
  const router = useRouter();
  const [modalState, setModalState] = useRecoilState(dealModalAtom);
  const [chatInfo] = useSsrAtom();

  const title = modalState ? '가격 제안' : chatInfo?.partnerNickName;

  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleBackPage = () => {
    router.back();
  };

  const CloseModalBtn = () => (
    <div onClick={handleCloseModal} className="cursor-pointer">
      <XSymbolIcon />
    </div>
  );

  const BackPageBtn = () => (
    <div onClick={handleBackPage} className="cursor-pointer">
      <LeftArrowIcon />
    </div>
  );

  const headerClass = `w-full max-w-[480px] fixed top-0 z-10 grid grid-cols-3 items-center px-6 pt-3 pb-4 bg-surface`;
  return (
    <header className={headerClass}>
      {modalState ? <CloseModalBtn /> : <BackPageBtn />}
      <h1 className="justify-self-center text-t1 whitespace-nowrap font-semibold">
        {title}
      </h1>
    </header>
  );
};

export default ChatHeader;
