import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CheckboxContainer from '.';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

describe('CheckboxForm test', () => {
  it('전체동의 체크박스를 클릭하면 모든 체크박스가 체크됨', async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <CheckboxContainer />
      </RecoilRoot>,
    );

    const allCheckBox = screen.getByLabelText('전체동의');
    await user.click(allCheckBox);

    const allCheckBoxes = screen.getAllByTestId('checkbox-selected');
    allCheckBoxes.forEach((checkbox) => {
      waitFor(() => {
        expect(checkbox).toBeInTheDocument();
      });
    });
  });
});
