import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormInput from '.';
import React from 'react';

describe('FormInput 테스트', () => {
  const mockRegister = jest.fn();
  const mockReset = jest.fn(() => {
    return { exampleValue: '' };
  });
  const user = userEvent.setup();

  const renderComponent = () =>
    render(
      <FormInput
        value="exampleValue"
        placeholder="Example Placeholder"
        register={mockRegister}
        reset={mockReset}
        won={true}
        inputOn={true}
      />,
    );

  it('입력한 placeHorder이 잘 적용이 되는 지', () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText('Example Placeholder');
    const cancelButton = screen.getByTestId('cancel-button');

    expect(inputElement).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('Reset 버튼이 잘 작동하는 지', () => {
    renderComponent();

    const cancelButton = screen.getByTestId('cancel-button');
    user.click(cancelButton);

    const inputElement = screen.getByPlaceholderText('Example Placeholder');
    expect(inputElement).toHaveValue('');
  });

  it('won이 true일 때, WonIconSVG가 잘 작동하는 지', () => {
    renderComponent();

    const wonIcon = screen.getByTestId('won-icon');
    expect(wonIcon).toBeInTheDocument();
  });
});
