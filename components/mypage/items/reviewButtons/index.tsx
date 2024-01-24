import React from 'react';
import { useRouter } from 'next/navigation';
import BottomSheets from '@/components/common/bottomSheets';
import BorderButton from '@/components/common/sheetsButtons/borderButton';
import { ReviewType, decodeReviewState } from '@/utils/get-dot-date';
import ReviewContent from '../reviewContent';
import { useSetRecoilState } from 'recoil';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';

const ReviewButtons = ({
  id,
  isReview = 'noReview',
}: {
  id: number;
  name?: string;
  isReview?: ReviewType;
}) => {
  const setBottomSheets = useSetRecoilState(outerBottomSheetsControl);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const reviewTitle = decodeReviewState(isReview);

  const closeBottomSheets = () => {
    setBottomSheets(false);
  };

  const ReviewCase: Record<ReviewType, JSX.Element> = {
    onReview: (
      <BottomSheets
        outerControl={true}
        outerControlAtom="default"
        title={reviewTitle}
        innerTitle="작성한 리뷰"
        buttonSelect="border"
        theme={true}
      >
        <ReviewContent id={id} fn={closeBottomSheets} />
      </BottomSheets>
    ),
    noReview: <BorderButton fn={handleClick} name={reviewTitle} />,
    deleteReview: <BorderButton name={reviewTitle} gray={true} deeperGray />,
    outDatedReview: <BorderButton name={reviewTitle} gray={true} deeperGray />,
  };

  return <div>{ReviewCase[isReview]}</div>;
};

export default ReviewButtons;
