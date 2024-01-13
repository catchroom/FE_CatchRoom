import React from 'react';
import { useRouter } from 'next/navigation';
import BottomSheets from '@/components/common/bottomSheets';

const ReviewButtons = ({
  id,
  name,
  soldOut = true,
  isReview,
}: {
  id: string;
  name?: string;
  soldOut?: boolean;
  isReview: boolean;
}) => {
  // review FETCH 필요
  const router = useRouter();
  const handleClick = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const handleEdit = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const handleDelete = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };
  return (
    <>
      {soldOut && (
        <div className="flex pt-3 justify-center items-center">
          {isReview ? (
            <BottomSheets title="작성한 리뷰보기">
              <div className="w-full flex flex-col p-5 gap-3">
                <div id="top" className="w-full flex justify-between">
                  <h1 className="text-t1 font-semibold">{name && name}</h1>
                  <div className="flex items-center gap-3">
                    <button onClick={handleEdit}>수정</button>
                    <button onClick={handleDelete}>삭제</button>
                  </div>
                </div>
                <div className="border-2 border-border-secondary">
                  <p className="p-5">저렴하게 잘 이용했어요!</p>
                </div>
              </div>
            </BottomSheets>
          ) : (
            <button onClick={handleClick}>리뷰 쓰기</button>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewButtons;
