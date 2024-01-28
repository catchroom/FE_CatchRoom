import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import HeartButton from '.';

mockAnimationsApi();

describe('heartButton', () => {
  it('버튼을 클릭하면 하트가 변경되는지 테스트', async () => {
    const user = userEvent.setup();
    let isButtonActive = true;

    const stateHandler = () => {
      isButtonActive = !isButtonActive;
    };
    render(
      <HeartButton
        isButtonActive={isButtonActive}
        stateHandler={stateHandler}
        data-testid="heart-button"
      />,
    );

    const button = screen.getByTestId('heart-button');
    await user.click(button);

    await waitFor(() => {
      const content = screen.getByTestId('fullHeartIcon');
      expect(content).toBeVisible();
    });
  });
});
