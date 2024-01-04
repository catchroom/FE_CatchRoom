import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithdrawForm from '.';
import { mockAnimationsApi } from 'jsdom-testing-mocks';

mockAnimationsApi();

describe('WithdrawForm test', () => {
  it('form value에 string이 들어간 경우 에러 발생 문구 생성', async () => {
    const user = userEvent.setup();
    render(<WithdrawForm originalBalance={5000} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'this is balance');

    const button = screen.getByText('확인');
    await user.click(button);

    await waitFor(() => {
      const errorMessage = screen.getByText('출금액은 숫자만 입력 가능합니다.');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('form value에 originalBalance보다 적은 돈이 들어오면 에러문구 발생', async () => {
    const user = userEvent.setup();
    render(<WithdrawForm originalBalance={5000} />);

    const input = screen.getByRole('textbox');
    await user.type(input, '1000000');

    const button = screen.getByText('확인');
    await user.click(button);

    await waitFor(() => {
      const errorMessage = screen.getByText('출금 가능 금액을 확인해주세요.');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
