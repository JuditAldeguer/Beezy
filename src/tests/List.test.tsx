import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/secondary-c/List';

test("renders Characters list title", () => {
  render(<List />);
  const linkElement = screen.getByText(/Characters list/i);
  expect(linkElement).toBeInTheDocument();
});
