import React from 'react';
import { render } from '@testing-library/react';
import Nav from './index';
import App from 'App'

test('renders Home link', () => {
  const { getByText } = render(<App><Nav /></App>);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
