import React from 'react';
import { render } from '@testing-library/react';
import MessageItem from './index';
import { MessagePropsNoPartial } from '@/types/chat/chatRoom/types';
import { RecoilRoot } from 'recoil';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({}),
}));

describe('MessageItem', () => {
  const messageProps: MessagePropsNoPartial = {
    type: 'TALK',
    message: '안녕하세요!',
    userId: 13,
    roomId: '12',
    time: '2024-01-28T12:00:00',
    negoPrice: 50,
    isSeller: false,
    accept: jest.fn(),
    deny: jest.fn(),
  };

  it('현재 사용자가 보낸 메시지일 경우 SendMessage를 렌더링합니다', () => {
    const { getByText } = render(
      <RecoilRoot>
        <MessageItem {...messageProps} />
      </RecoilRoot>,
    );
    expect(getByText('안녕하세요!')).toBeInTheDocument();
  });

  it('다른 사용자가 보낸 메시지일 경우 ReceiveMessage를 렌더링합니다', () => {
    const otherUserProps = { ...messageProps, userId: 15 };
    const { getByText } = render(
      <RecoilRoot>
        <MessageItem {...otherUserProps} />
      </RecoilRoot>,
    );
    expect(getByText('안녕하세요!')).toBeInTheDocument();
  });

  it('NEGO_REQ 유형의 메시지일 경우 OfferMessage를 렌더링합니다', () => {
    const negoReqProps: MessagePropsNoPartial = {
      ...messageProps,
      type: 'NEGO_REQ',
    };
    const { getByText } = render(
      <RecoilRoot>
        <MessageItem {...negoReqProps} />
      </RecoilRoot>,
    );
    expect(getByText('가격을 제안했어요')).toBeInTheDocument();
  });
});
