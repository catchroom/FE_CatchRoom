import React from 'react';
import ChatConrol from '../../components/chat/chatList/control/index';
import BottomNav from '@/components/common/bottomNav';
import ChatWrapper from '@/components/chat/chatList/wrapper';
import ChatListViewer from '@/components/chat/chatList/viewer';
import { loadedChatList } from '@/api/chat/serverApi';

const Page = async () => {
  const data = await loadedChatList();

  return (
    <div className="w-full h-full">
      <ChatWrapper>
        <ChatConrol>
          <ChatListViewer initialData={data} />
        </ChatConrol>
      </ChatWrapper>
      <BottomNav />
    </div>
  );
};

export default Page;
