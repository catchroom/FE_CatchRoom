import React from 'react';
import { useRouter } from 'next/navigation';
import BottomSheets from '@/components/common/bottomSheets';
import BorderButton from '@/components/common/sheetsButtons/borderButton';
import { ReviewType, decodeReviewState } from '@/utils/get-dot-date';
import ReviewContent from '../reviewContent';

const ReviewButtons = ({
  id,
  isReview,
}: {
  id: string;
  name?: string;
  isReview: ReviewType;
}) => {
  // review FETCH 필요
  const router = useRouter();
  const handleClick = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const reviewTitle = decodeReviewState(isReview);

  const ReviewCase: Record<ReviewType, JSX.Element> = {
    onReview: (
      <BottomSheets
        title={reviewTitle}
        innerTitle="작성한 리뷰"
        buttonSelect="border"
        theme={true}
      >
        <ReviewContent id={id} />
      </BottomSheets>
    ),
    noReview: <BorderButton fn={handleClick} name={reviewTitle} />,
    deleteReview: <BorderButton name={reviewTitle} gray={true} deeperGray />,
    outDatedReview: <BorderButton name={reviewTitle} gray={true} deeperGray />,
  };

  return <div>{ReviewCase[isReview]}</div>;
};

export default ReviewButtons;
