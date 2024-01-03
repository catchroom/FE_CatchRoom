import React from 'react';
import { isLikedState } from '@/atoms/commons/heartButton';
import { useRecoilState } from 'recoil';
import EmptyHeartIcon from '@/public/svgComponent/emptyHeart';
import FullHeartIcon from '@/public/svgComponent/fullHeart';

/**
 * 찜하기 기능으로 사용할 수 있는 Heart Button 컴포넌트 입니다.
 * @component
 * @returns {JSX.Element} HeartButton 컴포넌트 반환
 */

const HeartButton = () => {
  const [isLiked, setIsLiked] = useRecoilState(isLikedState);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center p-2">
      <button onClick={handleLike}>
        {!isLiked ? (
          <div className="p-2">
            <EmptyHeartIcon />
          </div>
        ) : (
          <div className="p-2">
            <FullHeartIcon />
          </div>
        )}
      </button>
    </div>
  );
};

export default HeartButton;
