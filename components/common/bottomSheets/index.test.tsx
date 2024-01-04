import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import BottomSheets from '.';
import { mockAnimationsApi } from 'jsdom-testing-mocks';

mockAnimationsApi();

describe('BottomSheets', () => {
  it('renders without crashing', async () => {
    const user = userEvent.setup();
    render(
      <BottomSheets title="버튼클릭">
        <div>hello</div>
      </BottomSheets>,
    );

    const button = screen.getByText('버튼클릭');
    await user.click(button);

    await waitFor(() => {
      const content = screen.getByText('hello');
      expect(content).toBeInTheDocument();
    });
  });

  it('modalClose 버튼을 누르면 모달이 닫히는 지 테스트', async () => {
    const user = userEvent.setup();
    render(
      <BottomSheets title="버튼클릭">
        <div>hello</div>
      </BottomSheets>,
    );

    const button = screen.getByText('버튼클릭');
    await user.click(button);

    const modalCloseButton = screen.getByTestId('modalClose');
    await user.click(modalCloseButton);

    await waitFor(() => {
      const content = screen.queryByText('hello');
      expect(content).not.toBeInTheDocument();
    });
  });

  it('modalClose 버튼을 누르지 않고 모달 바깥을 누르면 모달이 닫히는 지 테스트', async () => {
    const user = userEvent.setup();
    render(
      <BottomSheets title="버튼클릭">
        <div>hello</div>
      </BottomSheets>,
    );

    const button = screen.getByText('버튼클릭');
    await user.click(button);

    const modal = screen.getByTestId('modalBg');
    await user.click(modal);

    await waitFor(() => {
      const content = screen.queryByText('hello');
      expect(content).not.toBeInTheDocument();
    });
  });
});
