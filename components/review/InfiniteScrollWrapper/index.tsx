'use client';
import { getReviewListForScroll } from '@/api/home/api';
import { ReviewItemType } from '@/types/home/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReviewSkeletonUI from '../reviewSkeletonUI';
import ReviewItem from '../reviewItem';

const InfiniteScrollWrapper = () => {
  const dataType = 2;
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['messages'],
    queryFn: ({ pageParam }) => getReviewListForScroll({ dataType, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.list.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
  console.log(data);
  if (isLoading) return <ReviewSkeletonUI />;
  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      scrollableTarget="scrollableDiv"
      loader={<div className="loader" key={0}></div>}
    >
      <div
        id="scrollableDiv"
        className="w-full max-h-[calc(100vh-52px)] overflow-auto flex flex-col mt-[52px] gap-12 pt-2"
      >
        {' '}
        {data ? (
          data.pages.map((page, pageIndex) => (
            <div key={pageIndex} className="flex flex-col gap-8">
              {page.list.map((item: ReviewItemType, index: number) => (
                <ReviewItem
                  key={item?.productName + index}
                  productName={item?.productName}
                  userName={item?.userName}
                  date={item?.date}
                  content={item?.content}
                  image={item?.image}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollWrapper;
