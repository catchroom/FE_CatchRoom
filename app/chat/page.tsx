import React from 'react';
import ChatConrol from '../../components/chat/chatList/control/index';
import BottomNav from '@/components/common/bottomNav';
import ChatWrapper from '@/components/chat/chatList/wrapper';
import ChatListViewer from '@/components/chat/chatList/viewer';
import { loadedChatList } from '@/api/chat/api';

const Page = async () => {
  // 초기 데이터 로드 (채팅방 리스트)
  const initialData = await loadedChatList();
  return (
    <div className="w-full h-full">
      <ChatWrapper>
        <ChatConrol>
          <ChatListViewer initialData={initialData} />
        </ChatConrol>
      </ChatWrapper>
      <BottomNav />
    </div>
  );
};

export default Page;
