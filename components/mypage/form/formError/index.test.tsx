import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import FormError from '.';

mockAnimationsApi();

const TEST_MESSAGE = 'test message';

describe('FormError test', () => {
  it('FormError Input요소 반영하는 지 테스트', async () => {
    render(<FormError message={TEST_MESSAGE} />);

    const pTag = screen.getByTestId('error-message');

    expect(pTag).toHaveTextContent(TEST_MESSAGE);
  });
});
