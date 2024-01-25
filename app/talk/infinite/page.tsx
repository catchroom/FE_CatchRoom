'use client';

import React from 'react';
import { infinitePreviousChat } from '@/api/chat/api';
import { useCookies } from 'react-cookie';
import { useInfiniteQuery } from '@tanstack/react-query';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoginButton from '../LoginButton';

const InfiniteScrollWrapper = () => {
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

  return (
    <div>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        inverse={true}
        scrollableTarget="scrollableDiv"
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div
          id="scrollableDiv"
          className="w-full h-64 overflow-auto border flex flex-col-reverse"
        >
          {' '}
          {data ? (
            data.pages.map((page, pageIndex) => (
              <div key={pageIndex}>
                {/* eslint-disable-next-line */}
                {page.map((item: any, index: number) => (
                  <div key={index}>
                    <div>{item.message}</div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <>메세지없음</>
          )}
        </div>
      </InfiniteScroll>
      <LoginButton />
    </div>
  );
};

export default InfiniteScrollWrapper;
