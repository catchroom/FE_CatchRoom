'use client';

import { infinitePreviousChat } from '@/api/chat/api';
import React from 'react';
import { useCookies } from 'react-cookie';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from '@tanstack/react-query';
import MessageItem from '../messageItem';

const InfiniteScrollWrapper = ({
  accept,
  deny,
}: {
  accept: (price: number) => void;
  deny: (price: number) => void;
}) => {
  const roomId = 'df16caeb-d73a-470a-af14-b7edf276ddc2';
  const [cookies] = useCookies();
  const token = cookies.accessToken;

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['messages'],
    queryFn: ({ pageParam }) =>
      infinitePreviousChat({ pageParam, roomId, token }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });

  //데이터가 추가될 때마다 fetchNextPage가 호출되어야 함

  return (
    <div>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        inverse={true}
        scrollableTarget="scrollableDiv"
        loader={<div className="loader" key={0}></div>}
      >
        <div
          id="scrollableDiv"
          className="w-full max-h-[calc(100vh-200px)] overflow-auto flex flex-col-reverse"
        >
          {' '}
          {data ? (
            data.pages.map((page, pageIndex) => (
              <div key={pageIndex}>
                {/* eslint-disable-next-line */}
                {page.map((item: any, index: number) => (
                  <MessageItem
                    accept={accept}
                    deny={deny}
                    key={index}
                    type={item.type}
                    message={item.message as string}
                    userId={item.userId as number}
                    roomId={item.roomId as string}
                    time={item.time as string}
                    negoPrice={item.negoPrice as number}
                  />
                ))}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollWrapper;
