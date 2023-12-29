'use client';

import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { isLikedState } from '@/atoms/heartButton';
import { useRecoilState } from 'recoil';

/**
 * 찜하기 기능으로 사용할 수 있는 Heart Button 컴포넌트 입니다.
 * @component
 * @returns {JSX.Element} HeartButton 컴포넌트 반환
 */

function HeartButton() {
  const [isLiked, setIsLiked] = useRecoilState(isLikedState);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="p-2">
      <button onClick={handleLike}>
        {!isLiked ? (
          <div className="p-2 text-2xl">
            <FaRegHeart color="black" />
          </div>
        ) : (
          <div className="p-2 text-2xl ">
            <FaHeart color="red" />
          </div>
        )}
      </button>
    </div>
  );
}

export default HeartButton;
