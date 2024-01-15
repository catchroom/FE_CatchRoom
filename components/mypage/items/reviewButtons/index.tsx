import React from 'react';
import { useRouter } from 'next/navigation';
import BottomSheets from '@/components/common/bottomSheets';
import BorderButton from '@/components/common/sheetsButtons/borderButton';

const ReviewButtons = ({
  id,
  isReview,
}: {
  id: string;
  name?: string;
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
      {isReview ? (
        <BottomSheets
          title="작성된 리뷰보기"
          innerTitle="작성한 리뷰"
          buttonSelect="border"
          theme={true}
        >
          <div className="w-full flex flex-col mt-6 gap-6">
            <p>저렴하게 잘 이용했어요!</p>
            <div className="w-full flex justify-end">
              <button className="p-1 h-9 w-[60px]" onClick={handleEdit}>
                수정
              </button>
              <button
                className="p-1 h-9 w-[60px] text-text-critical"
                onClick={handleDelete}
              >
                삭제
              </button>
            </div>
          </div>
        </BottomSheets>
      ) : (
        <BorderButton fn={handleClick} name="리뷰 쓰기" />
      )}
    </>
  );
};

export default ReviewButtons;
