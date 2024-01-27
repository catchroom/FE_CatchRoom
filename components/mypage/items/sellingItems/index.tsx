import React from 'react';
import Image from 'next/image';
import { MypageSellingType } from '@/types/mypage/data-types';
import CalendarSVG from '@/public/svgComponent/mediumCalendar';
import ReviewButtons from '../reviewButtons';
import DeleteButtons from '../deleteButtons';
import { getMypageDate } from '@/utils/get-dot-date';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { isProductState } from '@/atoms/sale/productAtom';
import { getReviewState, getSellState } from '@/utils/mypage-utils';
import ReEnrollButton from '../reEnrollButton';
import { getDotDate } from '@/utils/get-dot-date';

const MItem = ({ item }: { item: MypageSellingType }) => {
  const setIsProduct = useSetRecoilState(isProductState);
  const router = useRouter();

  const handleEditDate = () => {
    setIsProduct(true);
    router.push(`/sale?id=${item.productId}`);
  };

  console.log(item.productId);
  console.log(item.dealState);
  console.log(item);

  const listState = '판매';

  const isCatch = !item?.dealState && item.isCatch === true ? true : false;

  // 게시만료일때만 => 판매완료, 기한만료, 판매불가 따지기
  const isNothing = item?.dealState ? true : false;

  const renderDealState = (dealState: string) => {
    switch (dealState) {
      case 'EXPIRED':
        return (
          <>
            <p>{getSellState(dealState)}</p>
            <ReEnrollButton dealState={dealState} fn={handleEditDate} />
          </>
        );
      case 'DONEDEAL':
        return <p>판매완료</p>;
      case 'UNSOLD':
      case 'UNABLESELL':
        return <p>{getSellState(dealState)}</p>;
      default:
        return <p>게시만료일 ~ {getDotDate(item.endDate, true, true, true)}</p>;
    }
  };

  return (
    <div className="w-full px-5 py-3 flex flex-col gap-3">
      <div id="container" className="w-full flex flex-col ">
        {/* 호텔 이미지, 이름, 가격 정보 */}
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            {/* 호텔 이미지 */}
            {isNothing && (
              <div className="absolute flex z-10 items-center justify-center inset-0 backdrop-saturate-50 backdrop-brightness-75">
                <p className="text-text-on font-semibold text-t2 ">
                  {getSellState(
                    item ? (item.dealState as string) : '판매 완료',
                  )}
                </p>
              </div>
            )}
            <Image
              src={item.thumbNailUrl}
              alt="room3"
              fill={true}
              sizes="(max-width: 480px) 100px, (max-width: 320px) 80px, 60px"
              priority
              className="rounded-md object-cover cursor-pointer"
              onClick={() => {
                router.push(`/room-info/${item.productId}`);
              }}
            />
            {/* 캐치특가 여부 판단 */}
            {isCatch && (
              <span className="text-text-on border border-pink-600 bg-focus flex text-p4 absolute top-1 left-1 z-10 items-center py-1 px-[6.5px] rounded-xl">
                캐치특가
              </span>
            )}
            s
          </div>
          {/* 호텔 이름과 가격 정보 */}
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              {/* 호텔 체크인 체크아웃 날짜 */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-text text-t3 font-medium">
                  <CalendarSVG />
                  <div className="flex xl:gap-1 whitespace-nowrap flex-col xl:flex-row">
                    <div className="flex gap-1">
                      {getMypageDate(item.checkIn)}
                      <span>{`~`}</span>
                    </div>
                    <p>{getMypageDate(item.checkOut)}</p>
                  </div>
                </div>
                {isNothing && <DeleteButtons id={parseInt(item.productId)} />}
              </div>
              <div className="text-text">
                <h3 className="text-t1 font-bold">{item.accommodationName}</h3>
                <p className="text-t3 font-semibold">
                  {item.sellPrice?.toLocaleString('us-EN')}원
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-sub text-t3 font-medium">
              {renderDealState(item.dealState as string)}
            </div>
          </div>
        </div>
      </div>
      {item && item.dealState === 'DONEDEAL' && (
        <ReviewButtons
          id={parseInt(item.productId)}
          type={listState}
          isReview={getReviewState(item.reviewStatusType as string)}
          reviewId={item?.reviewId}
        />
      )}
    </div>
  );
};

export default MItem;
