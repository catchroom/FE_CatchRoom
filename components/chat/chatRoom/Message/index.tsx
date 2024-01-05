import React from 'react';

export type MessageProps = {
  sendUserId: string;
  content: string;
  date: string;
};

const Message = async ({ sendUserId, content, date }: MessageProps) => {
  const userId = '123123';

  return (
    <>
      {userId === sendUserId ? (
        <div className="max-w-3/4 flex items-end ml-auto mb-3">
          <p className="mr-2 text-gray-500 text-t3">{date}</p>
          <div className="h-10 bg-gray-200 text-black text-p1 px-4 py-2 rounded-full">
            {content}
          </div>
        </div>
      ) : (
        <div className="flex items-end mr-auto mb-3">
          <div className=" bg-white text-gray-900 border border-textSub text-p1 px-4 py-2 rounded-full">
            {content}
          </div>
          <p className="ml-2 text-gray-500 text-t3 ">{date}</p>
        </div>
      )}
    </>
  );
};

export default Message;
