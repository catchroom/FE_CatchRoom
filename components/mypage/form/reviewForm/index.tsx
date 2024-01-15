'use client';

import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { FormReview, reviewSchema } from '@/constants/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ReviewForm = () => {
  const [wordCount, setWordCount] = React.useState(0);
  const { register, handleSubmit, setValue } = useForm<FormReview>({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormReview> = (data) => {
    if (reviewSchema.safeParse(data).success) {
      console.log(data);
    }
  };

  console.log('렌ㄹ');
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
      className="w-full relative h-64 border border-border-sub rounded-md overflow-hidden"
    >
      <textarea
        autoFocus
        maxLength={100}
        {...register('content')}
        onChange={handleContentChange}
        className="w-full h-64 break-all text-start resize-none p-3 focus:outline-none"
      />
      <p className="absolute bottom-3 right-3">{wordCount}/100</p>
      {wordCount >= 100 && (
        <p className="abolute bottom-0 text-text-primary">
          리뷰는 최대 100자까지 입력 가능합니다.
        </p>
      )}
      {wordCount < 1 && (
        <p className="abolute bottom-0 text-text-primary">
          리뷰는 최소 1자 이상 입력해주세요.
        </p>
      )}
      <div className="w-full max-w-[480px] fixed bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton name="등록" type="submit" />
      </div>
    </form>
  );
};

export default ReviewForm;
