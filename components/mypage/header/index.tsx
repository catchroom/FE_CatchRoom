'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MYPAGE_APP_ROUTE } from '@/constants/mypage';
import LeftArrowIcon from '@/public/svgComponent/leftArrow';
import { useRecoilValue } from 'recoil';
import { mypageRoutingAtom } from '@/atoms/mypage/mypageRoutingAtom';

const MyPageHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const beenMypageRouting = useRecoilValue(mypageRoutingAtom);

  const findTitle = (pathname: string) => {
    return MYPAGE_APP_ROUTE.find((route) => route.LOCATION === pathname)?.TITLE;
  };

  const findBorder = (pathname: string) => {
    return MYPAGE_APP_ROUTE.find((route) => route.LOCATION === pathname)
      ?.BOTTOM;
  };

  const handleBackPage = () => {
    if (beenMypageRouting) return router.push('/mypage');
    else return router.back();
  };

  const BackPageBtn = () => (
    <div onClick={handleBackPage} className="cursor-pointer">
      <LeftArrowIcon />
    </div>
  );

  const title = pathname && findTitle(pathname);
  const border = pathname ? findBorder(pathname) : false;

  const headerClass = `w-full max-w-[480px] bg-bg fixed top-0 z-10 grid grid-cols-3 items-center px-6 pt-3 pb-4 ${
    border ? 'border-b border-gray-300' : ''
  }`;
  return (
    <div className="w-full max-w-[480px] fixed inset-0 left-1/2 -translate-x-1/2">
      <header className={headerClass}>
        <BackPageBtn />
        <h1 className="justify-self-center text-t1 whitespace-nowrap font-semibold">
          {title}
        </h1>
      </header>
    </div>
  );
};

export default MyPageHeader;

// 'use client';

// import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';
// import { dealModalAtom } from '@/atoms/chat/leaveButton';
// import LeftArrowIcon from '@/public/svgComponent/leftArrow';
// import XSymbolIcon from '@/public/svgComponent/xSymbol';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { useRecoilState, useRecoilValue } from 'recoil';

// const ChatHeader = () => {
//   const router = useRouter();
//   const [modalState, setModalState] = useRecoilState(dealModalAtom);
//   const chatInfo = useRecoilValue(chatRoomInfo);

//   const title = modalState ? '가격 제안' : chatInfo?.partnerNickName;

//   const handleCloseModal = () => {
//     setModalState(false);
//   };

//   const handleBackPage = () => {
//     router.push('/chat');
//   };

//   const CloseModalBtn = () => (
//     <div onClick={handleCloseModal} className="cursor-pointer">
//       <XSymbolIcon />
//     </div>
//   );

//   const BackPageBtn = () => (
//     <div onClick={handleBackPage} className="cursor-pointer">
//       <LeftArrowIcon />
//     </div>
//   );

//   const headerClass = `w-full max-w-[480px] fixed top-0 z-10 grid grid-cols-3 items-center px-6 pt-3 pb-4 bg-surface`;
//   return (
//     <header className={headerClass}>
//       {modalState ? <CloseModalBtn /> : <BackPageBtn />}
//       <h1 className="justify-self-center text-t1 whitespace-nowrap font-semibold">
//         {title}
//       </h1>
//     </header>
//   );
// };

// export default ChatHeader;
