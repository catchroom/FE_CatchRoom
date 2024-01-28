import React from 'react';
import { render } from '@testing-library/react';
import DeclineMessage from './index';
import { RecoilRoot } from 'recoil';

describe('DeclineMessage', () => {
  const messageProps = {
    negoPrice: 50000,
    time: '2024-01-28T12:00:00Z',
    isSeller: true,
  };

  it('올바르게 렌더링되어야 합니다.', () => {
    const { getByText } = render(
      <RecoilRoot>
        <DeclineMessage {...messageProps} />
      </RecoilRoot>,
    );

    expect(getByText('제안을 거절했어요')).toBeInTheDocument();
    expect(getByText('요청 금액: 50000원')).toBeInTheDocument();
  });

  it('판매자가 아닌 경우 올바르게 렌더링되어야 합니다.', () => {
    const { getByText } = render(
      <RecoilRoot>
        <DeclineMessage {...messageProps} isSeller={false} />
      </RecoilRoot>,
    );

    expect(getByText('제안이 거절됐어요')).toBeInTheDocument();
    expect(getByText('제안한 가격은 유효하지 않습니다')).toBeInTheDocument();
  });
});
