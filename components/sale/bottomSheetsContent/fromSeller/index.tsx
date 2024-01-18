'use client';

import CheckBoxComponent from '@/components/common/checkBox';
import { FromSeller, sellerSchema } from '@/constants/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const FromSeller = () => {
  const [agreePriceOffer, setAgreedPriceOffer] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState(0);
  const { register, handleSubmit, setValue } = useForm<FromSeller>({
    resolver: zodResolver(sellerSchema),
    mode: 'onChange',
  });

  const router = useRouter();

  const [content, setContent] = useState('');

  const onSubmit: SubmitHandler<FromSeller> = (data) => {
    if (sellerSchema.safeParse(data).success) {
      console.log(data);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value;
    setWordCount(currentValue.length);

    if (currentValue.length > 100) {
      const slicedValue = currentValue.slice(0, 100);
      setValue('sellerContent', slicedValue);
      setWordCount(slicedValue.length);
      setContent(slicedValue);
    }
  };

  const handleCheckbox = () => {
    setAgreedPriceOffer((prev) => !prev);
  };

  const handleButtonClick = () => {
    if (wordCount > 10) {
      router.push('/room-info');
      console.log(content);
    }
  };
  return (
    <div className="flex flex-col w-full mt-8">
      <form className="w-full h-[120px]" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="w-full h-[120px] border border-border-sub px-3 py-2 focus:outline-border-sub"
          {...register('sellerContent')}
          onChange={handleContentChange}
          placeholder={`판매사유 등 추가설명 작성\nex) 네고 가능하니 연락주세요!`}
        />
      </form>
      <div className="flex justify-between mt-2 text-p2 mb-5">
        <p className="text-text-sub">최소 10자 이상 입력해주세요</p>
        <p>{wordCount}/100</p>
      </div>
      <CheckBoxComponent
        id="priceOffer"
        labelText="가격 제안 받기"
        isBoxChecked={agreePriceOffer}
        isLabelTextBold={true}
        handleSelectState={handleCheckbox}
      />

      <button
        onClick={handleButtonClick}
        type="submit"
        className="bg-action-primary h-11 px-4 mt-6 rounded text-text-on text-t2 font-semibold "
      >
        등록하기
      </button>
    </div>
  );
};

export default FromSeller;
