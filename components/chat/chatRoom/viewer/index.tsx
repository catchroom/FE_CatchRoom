'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';
// import InfiniteScrollWrapper from '../infiniteWrapper';
import ChatMessageSender from '../sender';
import { useInfiniteScroll } from '@/api/chat/query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MessageItemProps } from '@/types/chat/chatRoom/types';

const ChatMessageViewer = ({
  accept,
  deny,
  send,
  roomId,
  token,
}: {
  accept: (price: number) => void;
  deny: (price: number) => void;
  send: (message: string) => void;
  roomId: string;
  token: string;
}) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteScroll(roomId, token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const messages = useRecoilValue(chatContentAtom);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`h-[calc(100vh-130px)] relative`}>
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
          className="w-full p-5 max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] overflow-auto flex flex-col-reverse"
        >
          <div ref={messageEndRef} />
          {messages.map((item, index) => (
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
          {data ? (
            data.pages.map((page, pageIndex) => (
              <div key={pageIndex}>
                {page.map((item: MessageItemProps, index: number) => (
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
        <ChatMessageSender publish={send} />
      </InfiniteScroll>
    </div>
  );
};

export default ChatMessageViewer;
