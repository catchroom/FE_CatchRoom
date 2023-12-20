import React from 'react';
import Home from '@/app/home/page';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
    expect(true).toBe(true);
  });
});
