import React from 'react';
import { useRouter } from 'next/navigation';

const ReviewButtons = ({
  id,
  soldOut = true,
  isReview,
}: {
  id: number;
  soldOut?: boolean;
  isReview: boolean;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };
  return (
    <>
      {soldOut && (
        <div className="flex pt-3 justify-center items-center">
          {isReview ? (
            <button>작성한 리뷰 보기</button>
          ) : (
            <button onClick={handleClick}>리뷰 쓰기</button>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewButtons;
