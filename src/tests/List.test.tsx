import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/secondary-c/List';

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/Characters list/i);
  expect(linkElement).toBeInTheDocument();
});
