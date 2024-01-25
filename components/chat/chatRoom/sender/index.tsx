'use client';

'use client';

import { userOutAtom } from '@/atoms/chat/leaveButton';
import SendIconSVG from '@/public/svgComponent/sendIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
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
  const userOut = useRecoilValue(userOutAtom);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<ChatMessage>({
    resolver: zodResolver(ChatMessageSchema),
    mode: 'onChange',
  });

  // textarea 높이 조절
  const resizeHeight = (textareaRef: React.RefObject<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      const originalHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = 'auto';
      const newHeight = textareaRef.current.scrollHeight;

      // Increase scrollTop to make the content expand upwards
      textareaRef.current.scrollTop += newHeight - originalHeight;
      textareaRef.current.style.height = newHeight + 'px';
    }
  };

  useEffect(() => {
    const handleInitialValue = () => {
      setHasValue(!!textareaRef.current?.value);
    };

    handleInitialValue();
    textareaRef.current?.addEventListener('input', handleInputChange);

    return () => {
      textareaRef.current?.removeEventListener('input', handleInputChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = () => {
    resizeHeight(textareaRef);
    setHasValue(!!textareaRef.current?.value);
  };

  const { ref, ...registerResult } = register('message');

  const onSubmit: SubmitHandler<ChatMessage> = (data) => {
    publish(data.message);
    reset();
    resizeHeight(textareaRef);
  };

  const placeHolderMessage = userOut
    ? '상대방이 나가면 대화를 할 수 없어요'
    : '메세지를 입력하세요';

  return (
    <div className="w-full max-w-[480px] fixed bottom-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full flex items-center border-t border-border-sub "
      >
        <div className="w-full gap-2 h-fit flex py-4 px-3">
          <textarea
            placeholder={placeHolderMessage}
            rows={1}
            {...registerResult}
            ref={(e) => {
              ref(e);
              textareaRef.current = e;
            }}
            disabled={userOut}
            onChange={handleInputChange}
            className={`grow resize-none ${
              userOut ? ' bg-surface-secondary text-sub' : 'bg-surface-gray'
            } px-4 py-2 text-start h-[40px] max-h-[96px] text-t2 rounded-[20px] outline-none ease-in focus:border focus:border-border-primary`}
          />
          <button type="submit" className="pl-3 cursor-pointer">
            <SendIconSVG send={hasValue} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatMessageSender;
