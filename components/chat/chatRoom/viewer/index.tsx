'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';
import ChatMessageSender from '../sender';
import { useInfiniteScroll } from '@/api/chat/query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MessageItemProps } from '@/types/chat/chatRoom/types';
import { Spinner } from '@material-tailwind/react';

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
  const messages = useRecoilValue(chatContentAtom);
  const [loaderVisible, setLoaderVisible] = React.useState(true);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Show the loader initially
    setLoaderVisible(true);

    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setLoaderVisible(false);
    }, 30000);

    // Clear the timeout when the component is unmounted or when a new page is loaded
    return () => {
      clearTimeout(timeoutId);
    };
  }, [data?.pages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      inverse={true}
      scrollableTarget="scrollableDiv"
      loader={
        loaderVisible && (
          <div className="fixed w-full max-w-[480px] flex flex-col items-center justify-center w z-[200000]">
            <Spinner color="pink" className="mt-5" />
            <p className="mt-1">로딩중</p>
          </div>
        )
      }
      className="h-[calc(100vh-133px)] flex flex-col relative"
    >
      <div
        id="scrollableDiv"
        className="w-full p-5 h-[calc(100vh-200px)] overflow-x-hidden overflow-y-scroll flex flex-col-reverse"
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
  );
};

export default ChatMessageViewer;
