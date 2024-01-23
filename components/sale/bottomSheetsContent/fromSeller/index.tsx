'use client';

import { useMutaionPostSaleProduct } from '@/api/home/query';
import { catchPriceState, catchState } from '@/atoms/sale/catchAtom';
import { isHeaderSate } from '@/atoms/sale/headerAtom';
import {
  percentState,
  priceState,
  totalPriceState,
} from '@/atoms/sale/priceAtom';
import {
  catchSingleDate,
  saleSingleDate,
} from '@/atoms/search-detail/searchStates';
import CheckBoxComponent from '@/components/common/checkBox';
import Modal from '@/components/common/modal';
import { FromSeller, sellerSchema } from '@/constants/zodSchema';
import { ProductItem } from '@/types/sale/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const FromSeller = () => {
  const [agreePriceOffer, setAgreedPriceOffer] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState(0);

  const { register, setValue } = useForm<FromSeller>({
    resolver: zodResolver(sellerSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('판매합니다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ');

  const mutation = useMutaionPostSaleProduct();

  const setHeaderUnVisible = useSetRecoilState(isHeaderSate);
  const params = useSearchParams();
  const id = params?.get('id');

  const endDate = useRecoilValue(saleSingleDate);
  const [sellPrice, setSellPrice] = useRecoilState(priceState);
  const actualProfit = useRecoilValue(totalPriceState);
  const [discountRate, setDiscountRate] = useRecoilState(percentState);
  const [isAutoCatch, setIsAutoCatch] = useRecoilState(catchState);
  const catchprice = useRecoilValue(catchPriceState);
  const catchPriceStartDate = useRecoilValue(catchSingleDate);
  const isCatch = discountRate >= 50 ? true : false;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value;
    setWordCount(currentValue.length);

    if (currentValue.length > 100) {
      const slicedValue = currentValue.slice(0, 100);
      setValue('sellerContent', slicedValue);
      setWordCount(slicedValue.length);
      setContent(slicedValue);
    } else {
      setContent(currentValue);
    }
    console.log(content);
  };

  const handleCheckbox = () => {
    setAgreedPriceOffer((prev) => !prev);
  };

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };
  const onConfirm = () => {
    handleModalOpen();
    setHeaderUnVisible(false);
    setIsAutoCatch(false);
    setSellPrice(0);
    setDiscountRate(0);
    router.push('/');
  };

  const handleButtonClick = () => {
    //api 호출

    const productData: ProductItem = {
      orderHistoryId: +id!,
      discountRate: discountRate,
      sellPrice: sellPrice,
      actualProfit: actualProfit,
      catchprice: catchprice,
      endDate: endDate!,
      introduction: content,
      isAutoCatch: isAutoCatch,
      isCatch: isCatch,
      isNego: agreePriceOffer,
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      catchPriceStartDate: catchPriceStartDate?.toDateString()!,
    };
    console.log(productData);
    mutation.mutate(productData);
    if (mutation.isSuccess) {
      router.push('/room-info');
      setHeaderUnVisible(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {open && (
        <Modal
          title="등록 실패"
          content="체크인 기간 만료된 숙박권은 판매가 불가합니다."
          showConfirmButton={true}
          onConfirm={onConfirm}
          confirmString="홈으로 이동"
        />
      )}
      <div className="flex flex-col w-full mt-8">
        <form className="w-full h-[120px]">
          <textarea
            className="w-full h-[120px] border border-border-sub px-3 py-2 focus:outline-border-sub"
            {...register('sellerContent')}
            onChange={handleContentChange}
            placeholder={`판매사유 등 추가설명 작성\nex) 네고 가능하니 연락주세요!`}
          />
        </form>
        <div className="w-full text-end mt-2 text-p2 mb-5 ">
          {wordCount}/100
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
    </>
  );
};

export default FromSeller;
