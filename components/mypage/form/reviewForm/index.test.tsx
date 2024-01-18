import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from '.';

describe('ReviewForm test', () => {
  const user = userEvent.setup();
  const renderComponent = () => render(<ReviewForm />);

  it('input에 문자가 100자 이상 들어가지 않는 지 테스트', async () => {
    renderComponent();

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '가'.repeat(200));

    await waitFor(() => {
      // 100자가 넘어가면 100자까지만 입력되는 지
      expect(textarea).toHaveValue('가'.repeat(100));

      // 100자가 넘어가면 경고 문구가 뜨는 지
      const warningMessage = screen.getByText(
        '리뷰는 최대 100자까지 입력 가능합니다.',
      );
      expect(warningMessage).toBeInTheDocument();
    });
  });

  it('placeHorder에 문자가 잘 들어가 있는 지', () => {
    renderComponent();

    const textarea = screen.getByPlaceholderText(
      '거래 경험을 자유롭게 작성해주세요. (추후 플랫폼 개선에 큰 도움이 됩니다.)',
    );
    expect(textarea).toBeInTheDocument();
  });

  it('아무것도 입력 안했을 때 경고 문구가 발생하는 지', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: '등록' });
    userEvent.click(submitButton);

    await waitFor(() => {
      const warningMessage = screen.getByText(
        '리뷰는 최소 1자 이상 입력해주세요.',
      );
      expect(warningMessage).toBeInTheDocument();
    });
  });
});
