import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters from '../components/secondary-c/Filters';

test("renders Filters title", () => {
  const handleChange: () => any = function(){};


  render(
    <Filters
      searchWord=""
      orderBy="name"
      status=""
      appearance=""
      handleChange={handleChange}
    />
  );
  const linkElement = screen.getByText(/Filters/i);
  expect(linkElement).toBeInTheDocument();
});
