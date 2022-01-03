import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/secondary-c/List';

test("renders Wiki title", () => {
  render(<List />);
  const linkElement = screen.getByText(/Wiki/i);
  expect(linkElement).toBeInTheDocument();
});
