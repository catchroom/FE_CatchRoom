'use client';

import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { FormReview, reviewSchema } from '@/constants/zodSchema';
import { useToastAlert } from '@/hooks/useToastAlert';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postReview, editReview } from '@/api/mypage/api';
import { useQueryGetReview } from '@/api/mypage/query';

const ReviewForm = ({
  id,
  type,
  reviewId,
}: {
  id: number;
  type: '구매' | '판매';
  reviewId?: number;
}) => {
  const { alertOpenHandler } = useToastAlert('리뷰를 등록했습니다.');
  const [wordCount, setWordCount] = useState(0);
  const { register, handleSubmit, setValue } = useForm<FormReview>({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
  });

  console.log(type, id, reviewId);

  const { data } = useQueryGetReview(type, reviewId);
  console.log(data);

  const onSubmit: SubmitHandler<FormReview> = async (reviewData) => {
    if (reviewSchema.safeParse(reviewData).success) {
      console.log(reviewData);
      if (reviewId) {
        editReview(type, reviewData.content, reviewId).then((res) => res.data);
      } else {
        postReview(type, reviewData.content, id).then((res) => res.data);
      }
      alertOpenHandler();
    }
  };

  const maxCharacterCount = 100;

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const currentValue = event.target.value;
    setWordCount(currentValue.length);

    // 문자 단위로 길이를 계산하여 maxLength를 적용
    if (currentValue.length > maxCharacterCount) {
      // 100자를 넘어가면 마지막 입력을 자르고 다시 설정
      const slicedValue = currentValue.slice(0, maxCharacterCount);
      setValue('content', slicedValue);
      setWordCount(slicedValue.length);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full relative h-64 border border-border-sub rounded-sm box-content"
    >
      <textarea
        autoFocus
        placeholder={
          data?.content ||
          '거래 경험을 자유롭게 작성해주세요. (추후 플랫폼 개선에 큰 도움이 됩니다.)'
        }
        maxLength={100}
        {...register('content')}
        onChange={handleContentChange}
        className="w-full h-64 break-all text-start resize-none p-3 focus:outline-none"
      />
      <p className="absolute bottom-3 right-3">{wordCount}/100</p>
      {wordCount >= 100 && (
        <p className="text-text-primary">
          리뷰는 최대 100자까지 입력 가능합니다.
        </p>
      )}
      {wordCount < 1 && (
        <p className="text-text-primary">리뷰는 최소 1자 이상 입력해주세요.</p>
      )}
      <div className="w-full max-w-[480px] fixed bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton name={data ? '수정' : '등록'} type="submit" />
      </div>
    </form>
  );
};

export default ReviewForm;
