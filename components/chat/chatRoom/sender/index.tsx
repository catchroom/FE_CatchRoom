'use client';

import SendIconSVG from '@/public/svgComponent/sendIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const ChatMessageSchema = z.object({
  message: z.string(),
});

type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatMessageSender = ({
  publish,
}: {
  publish: (message: string) => void;
}) => {
  const { register, handleSubmit } = useForm<ChatMessage>({
    resolver: zodResolver(ChatMessageSchema),
  });

  // textarea 높이 조절
  const textarea = useRef(null);
  const resizeHeight = (textarea: React.RefObject<HTMLTextAreaElement>) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };
  const handleInputChange = () => {
    resizeHeight(textarea);
  };

  const onSubmit: SubmitHandler<ChatMessage> = (data) => {
    publish(data.message);
    console.log(data.message);
  };

  return (
    <div className="w-full max-w-[480px] sticky bottom-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full flex items-center border-t border-border-sub"
      >
        <div className="w-full gap-2 h-fit flex py-4 px-3">
          <textarea
            placeholder="메세지를 입력하세요"
            rows={1}
            {...register('message')}
            ref={textarea}
            onChange={handleInputChange}
            className="grow bg-surface-gray px-4 py-2 text-start h-[40px] max-h-[120px] text-t2 rounded-[20px]"
          />
          <button type="submit" className="pl-3 cursor-pointer">
            <SendIconSVG />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatMessageSender;
