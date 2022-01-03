import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters from '../components/secondary-c/Filters';

test('renders learn react link', () => {
  render(<Filters />);
  const linkElement = screen.getByText(/Filters/i);
  expect(linkElement).toBeInTheDocument();
});
