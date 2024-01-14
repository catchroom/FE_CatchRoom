'use client';
// import { inView } from 'framer-motion';
import React from 'react';
import LeftButton from './leftButton';
import RightButton from './rightButton';
import { Button } from '@material-tailwind/react';
import { useRecoilState } from 'recoil';
import { viewerTestButton } from '@/atoms/roomInfo/headerTitle';
import MoreIcon from '@/public/svgComponent/moreIcon';

const HeaderComponent = () => {
  // ----------- 헤더부분에 스크롤에 따라 숙소이름 뜨게하려는 중...

  // const [scroll, setScroll] = useState<boolean>(false);

  // const titleRef = useRef(null);

  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
  //   if (window.scrollY >= 50) {
  //     setScroll(true);
  //     console.log(scroll);
  //   } else {
  //     // 스크롤이 50px 미만일경우 false를 넣어줌
  //     setScroll(false);
  //     console.log(scroll);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); //clean up
  //   };
  // }, []);
  // ---------------------------------------------------------------

  // ----------------- 추후 기능구현 후 지울예정! (구매자, 판매자 스타일 변경버튼)
  const [viewerState, setViewerState] = useRecoilState(viewerTestButton);

  const viewerTestHandler = () => {
    setViewerState(!viewerState);
  };
  // ---------------------------------------------------------

  return (
    <div className="fixed top-0 flex justify-between w-full max-w-[480px] bg-bg p-4 z-20">
      <LeftButton />
      {/* 스크롤에 따라 숙소이름 뜨게 하려는 용도.. */}
      {/* <p className="text-h5 font-extrabold">123</p> */}

      {/* 판매자 및 구매자 화면 전환용 (테스트용이고, 추후 삭제 예정입니다!)*/}
      <Button
        placeholder="Button"
        type="button"
        onClick={viewerTestHandler}
        className={`flex items-center  font-pretend h-[28px] rounded-[4px] text-[10px] font-semibold shadow-none bg-main text-white p-3`}
      >
        {viewerState ? `판매자 화면` : `구매자 화면`}
      </Button>
      {viewerState ? (
        <button className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ">
          <MoreIcon />
        </button>
      ) : (
        <RightButton />
      )}
    </div>
  );
};

export default HeaderComponent;
