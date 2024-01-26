'use client';

import { useMutationProduct } from '@/api/sale/query';
import { catchPriceState, catchState } from '@/atoms/sale/catchAtom';
import { isHeaderSate } from '@/atoms/sale/headerAtom';
import { isFromSalePageState } from '@/atoms/sale/pageAtom';
import {
  percentState,
  priceState,
  totalPriceState,
} from '@/atoms/sale/priceAtom';
import {
  isNegoState,
  isProductState,
  sellerContentState,
} from '@/atoms/sale/productAtom';
import { hourState, minuteState, timeState } from '@/atoms/sale/timeAtom';
import {
  catchSingleDate,
  saleSingleDate,
} from '@/atoms/search-detail/searchStates';
import CheckBoxComponent from '@/components/common/checkBox';
import Modal from '@/components/common/modal';
import { FromSeller, sellerSchema } from '@/constants/zodSchema';
import { ProductItem } from '@/types/sale/type';
import { formatDate } from '@/utils/formatDate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const FromSeller = () => {
  const [isProduct, setIsProduct] = useRecoilState(isProductState);
  const [isNego, setIsNego] = useRecoilState(isNegoState);
  const [sellerContent, setSellerContent] = useRecoilState(sellerContentState);
  const [wordCount, setWordCount] = useState(0);
  const router = useRouter();
  const { register, setValue } = useForm<FromSeller>({
    resolver: zodResolver(sellerSchema),
    mode: 'onChange',
  });
  const [open, setOpen] = useState(false);

  const mutation = useMutationProduct();

  const setHeaderUnVisible = useSetRecoilState(isHeaderSate);
  const params = useSearchParams();
  const id = params?.get('id');
  const catchPriceStartDate = useRecoilValue(catchSingleDate);
  const endDate = useRecoilValue(saleSingleDate);
  const [sellPrice, setSellPrice] = useRecoilState(priceState);
  const actualProfit = useRecoilValue(totalPriceState);
  const [discountRate, setDiscountRate] = useRecoilState(percentState);
  const [isAutoCatch, setIsAutoCatch] = useRecoilState(catchState);
  const catchprice = useRecoilValue(catchPriceState);
  const isCatch = discountRate >= 50 ? true : false;
  const [modalContent, setModalContent] = useState('');

  const [time, setTime] = useRecoilState(timeState);
  const [hour, setHour] = useRecoilState(hourState);
  const [minute, setMinute] = useRecoilState(minuteState);

  const [timeISOString, setTimeISOString] = useState('');

  const setIsFromSalePageState = useSetRecoilState(isFromSalePageState);

  useEffect(() => {
    // isProduct가 true이고, sellerContent에 값이 있을 때만 setValue 호출
    if (isProduct && sellerContent) {
      setValue('sellerContent', sellerContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProduct]);

  useEffect(() => {
    console.log(endDate);
    const combinedDateTime = new Date(
      endDate!.getFullYear(),
      endDate!.getMonth(),
      endDate!.getDate(),
      time === '오전' ? (hour === 12 ? 0 : hour) : hour === 12 ? 12 : hour + 12,
      minute,
    );
    console.log('fromseller', combinedDateTime);

    const timezoneOffset = combinedDateTime?.getTimezoneOffset() * 60000;
    const adjustedEndDate = new Date(
      combinedDateTime?.getTime() - timezoneOffset,
    );
    const isoString = adjustedEndDate
      ? adjustedEndDate?.toISOString()
      : '2024-01-26T18:22:33';
    console.log(isoString);
    setTimeISOString(isoString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value;
    setWordCount(currentValue.length);

    if (currentValue.length > 100) {
      const slicedValue = currentValue.slice(0, 100);
      setValue('sellerContent', slicedValue);
      setWordCount(slicedValue.length);
      setSellerContent(slicedValue);
    } else {
      setSellerContent(currentValue);
    }
  };

  const handleCheckbox = () => {
    setIsNego((prev) => !prev);
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
    setHeaderUnVisible(false);
    setIsNego(false);
    setSellerContent('');
    setIsProduct(false);
    setTime('오후');
    setHour(11);
    setMinute(59);
    router.push('/');
  };
  const handleButtonClick = () => {
    let productData: ProductItem;

    if (isProduct) {
      if (!isAutoCatch) {
        productData = {
          discountRate: discountRate,
          sellPrice: sellPrice,
          actualProfit: actualProfit,
          endDate: timeISOString,
          introduction: sellerContent,
          isAutoCatch: isAutoCatch,
          isCatch: isCatch,
          isNego: isNego,
        };
      } else {
        productData = {
          discountRate: discountRate,
          sellPrice: sellPrice,
          actualProfit: actualProfit,
          catchprice: catchprice,
          endDate: timeISOString,
          introduction: sellerContent,
          isAutoCatch: isAutoCatch,
          isCatch: isCatch,
          isNego: isNego,
          catchPriceStartDate: formatDate(catchPriceStartDate!),
        };
      }
    } else {
      //isProduct가 false일 때: orderHistoryId를 포함한 객체 생성
      if (!isAutoCatch) {
        productData = {
          orderHistoryId: +id!,
          discountRate: discountRate,
          sellPrice: sellPrice,
          actualProfit: actualProfit,
          endDate: timeISOString,
          introduction: sellerContent,
          isAutoCatch: isAutoCatch,
          isCatch: isCatch,
          isNego: isNego,
        };
      } else {
        productData = {
          orderHistoryId: +id!,
          discountRate: discountRate,
          sellPrice: sellPrice,
          actualProfit: actualProfit,
          catchprice: catchprice,
          endDate: timeISOString,
          introduction: sellerContent,
          isAutoCatch: isAutoCatch,
          isCatch: isCatch,
          isNego: isNego,
          catchPriceStartDate: formatDate(catchPriceStartDate!),
        };
      }
    }

    mutation.mutate(
      {
        id: +id!,
        product: productData,
        isProduct: isProduct,
      },
      {
        onSuccess: handleMutationSucess,
        onError: handleMutationError,
      },
    );
  };

  type APIresponse = {
    code: number;
    data: {
      id: number;
      accommodationName: string;
    };
  };
  const handleMutationSucess = (data: APIresponse) => {
    console.log(data);
    setIsFromSalePageState(true);
    setSellPrice(0);
    setDiscountRate(0);
    setIsNego(false);
    setSellerContent('');
    setTime('오후');
    setHour(11);
    setMinute(59);
    setIsProduct(false);
    if (data.code === 4010 || data.code === 4020) {
      setHeaderUnVisible(false);
      return router.push(`/room-info/${data.data.id}`);
    } else {
      setModalContent('이미 등록된 상품입니다.');
      setOpen(true);
      setHeaderUnVisible(false);
    }
  };
  const handleMutationError = () => {
    setModalContent('사유 : 서버 에러');
    setOpen(true);
    setHeaderUnVisible(false);
  };

  return (
    <>
      {open && (
        <Modal
          title="등록 실패"
          content={modalContent}
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
          isBoxChecked={isNego}
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
