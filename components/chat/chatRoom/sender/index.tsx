import SendIconSVG from '@/public/svgComponent/sendIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const ChatMessageSchema = z.object({
  message: z.string(),
});

type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatMessageSender = () => {
  const [rows, setRows] = React.useState(1);
  const { register, handleSubmit } = useForm<ChatMessage>({
    resolver: zodResolver(ChatMessageSchema),
  });

  const handleRows = rows > 1 ? 'rounded-md' : 'rounded-full';
  const onSubmit: SubmitHandler<ChatMessage> = (data) => console.log(data);
  return (
    <div className="w-full max-w-[480px] fixed bottom-0 left-1/2 -translate-x-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full flex items-center border-t border-border-sub"
      >
        <div className="w-full gap-2 h-fit flex py-4 px-3">
          <textarea
            onClick={() => setRows(3)}
            placeholder="메세지를 입력하세요"
            rows={rows}
            {...register('message')}
            className={`grow bg-surface-gray px-4 py-2 text-start ${handleRows} text-t2 `}
          />
          <button type="submit">
            <SendIconSVG />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatMessageSender;
