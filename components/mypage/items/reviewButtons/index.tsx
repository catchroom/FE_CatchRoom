import React from 'react';

const ReviewButtons = ({
  soldOut,
  isReview,
}: {
  soldOut: boolean;
  isReview: boolean;
}) => {
  return (
    <>
      {soldOut && (
        <div className="flex pt-3 justify-center items-center">
          {isReview ? (
            <button>작성한 리뷰 보기</button>
          ) : (
            <button>리뷰 쓰기</button>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewButtons;
