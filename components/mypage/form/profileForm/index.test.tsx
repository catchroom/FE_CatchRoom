import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileForm from '.';

describe('ProfileForm test', () => {
  it('form value에 특수문자가 들어간 경우 버튼을 클릭할 수 없음', async () => {
    const user = userEvent.setup();
    render(<ProfileForm />);

    const submitButton = screen.getByText('확인');
    const input = screen.getByRole('textbox');

    await user.type(input, '홍길동전');
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it('form value에 8자 이상 문자가 들어가면 에러 문구가 발생해야함', async () => {
    const user = userEvent.setup();
    render(<ProfileForm />);

    const input = screen.getByRole('textbox');

    await user.type(input, '홍길동전퐁당퐁당퐁당');
    await waitFor(() => {
      const errorMessage = screen.getByText(
        '닉네임은 2자 이상 8자 이하로 입력해주세요.',
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('cancel-button을 누르면 input value가 빈 값이 되어야 함', async () => {
    const user = userEvent.setup();
    render(<ProfileForm />);

    const input = screen.getByRole('textbox');
    const cancelButton = screen.getByTestId('cancel-button');

    await user.type(input, '홍길동전퐁당퐁당퐁당');
    await user.click(cancelButton);
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  it('reset-button을 누르면 input value가 name 값이 되어야 함', async () => {
    const user = userEvent.setup();
    render(<ProfileForm />);

    const input = screen.getByRole('textbox');
    const resetButton = screen.getByTestId('reset-button');

    await user.type(input, '홍길동전퐁당퐁당퐁당');
    await user.click(resetButton);
    await waitFor(() => {
      expect(input).toHaveValue('홍길동');
    });
  });
});
