import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from '.';

describe('ProfileForm test', () => {
  const user = userEvent.setup();
  const renderComponent = () => render(<ReviewForm />);

  it('cancel-button을 누르면 input value가 빈 값이 되어야 함', async () => {
    renderComponent();

    const input = screen.getByRole('textbox');
    const cancelButton = screen.getByTestId('cancel-button');

    await user.type(input, '홍길동전퐁당퐁당퐁당');
    await user.click(cancelButton);
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });
});
