import React from 'react';
import LoginButton from './LoginButton';
import ChattingRoom from './chattingRoom';
import MakeChattingButton from './makeChattingButton';

export type ChatRoom = {
  chatRoomNumber: string;
  buyerId: number;
  sellerId: number;
  productId: number;
  loginUserIdentity: string;
};

const page = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      <strong className="text-h1"># 채팅방 테스트용 페이지</strong>
      <section className="flex flex-col gap-12 py-20">
        <div>
          <strong className="text-h3 pb-3">## 로그인 로직관리</strong>
          <LoginButton />
        </div>
        <div>
          <strong className="text-h3 ">## 채팅방 리스트</strong>
          <ChattingRoom />
        </div>
        <div>
          <strong className="text-h3 pb-3">## 채팅방 만들기</strong>
          <MakeChattingButton />
        </div>
      </section>
    </div>
  );
};

export default page;
