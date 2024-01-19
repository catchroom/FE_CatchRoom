import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot, atom } from 'recoil';
import SellingPriceContainer from '.';

describe('SellingPriceContainer test', () => {
  // 모의 Recoil 상태
  const priceState = atom({
    key: 'priceState',
    default: 0,
  });
  it('아무 값도 선택되지 않았을 때 판매가를 선택해 달라고 떠야함 또한, inputButton으로 떠야함', () => {
    render(
      <RecoilRoot initializeState={(snap) => snap.set(priceState, 0)}>
        <SellingPriceContainer price={123000} />
      </RecoilRoot>,
    );

    expect(screen.getByText('판매가를 선택해주세요')).toBeInTheDocument();
    expect(screen.getByTestId('inputButton')).toBeInTheDocument();
  });

  it('값이 선택됐을 때는 saleButton으로 떠야함', () => {
    render(
      <RecoilRoot initializeState={(snap) => snap.set(priceState, 110000)}>
        <SellingPriceContainer price={123000} />
      </RecoilRoot>,
    );

    expect(screen.getByTestId('priceButton')).toBeInTheDocument();
  });
});
