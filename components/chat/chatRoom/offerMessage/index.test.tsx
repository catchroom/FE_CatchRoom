import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OfferMessage from './index';
import { RecoilRoot } from 'recoil';

describe('OfferMessage', () => {
  const acceptMock = jest.fn();
  const denyMock = jest.fn();
  const defaultProps = {
    negoPrice: 100,
    time: '2024-01-28T12:00:00',
    isSeller: true,
    accept: acceptMock,
    deny: denyMock,
  };

  it('올바르게 렌더링되어야 합니다', () => {
    const { getByText } = render(
      <RecoilRoot>
        <OfferMessage {...defaultProps} />
      </RecoilRoot>,
    );

    expect(getByText('가격을 제안했어요')).toBeInTheDocument();
    expect(getByText('거절하기')).toBeInTheDocument();
    expect(getByText('승인하기')).toBeInTheDocument();
  });

  it('승인 버튼을 클릭하면 accept 함수가 호출되어야 합니다', () => {
    const { getByText } = render(
      <RecoilRoot>
        <OfferMessage {...defaultProps} />
      </RecoilRoot>,
    );

    fireEvent.click(getByText('승인하기'));
    expect(acceptMock).toHaveBeenCalledWith(100);
  });

  it('거절 버튼을 클릭하면 deny 함수가 호출되어야 합니다', () => {
    const { getByText } = render(
      <RecoilRoot>
        <OfferMessage {...defaultProps} />
      </RecoilRoot>,
    );

    fireEvent.click(getByText('거절하기'));
    expect(denyMock).toHaveBeenCalledWith(100);
  });
});
