import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters from '../components/secondary-c/Filters';
import json from "../services/data.json";

test("renders Filters title", () => {
  const data = json;
  const handleChange: () => any = function(){};


  render(<Filters data={data} handleChange={handleChange} />);
  const linkElement = screen.getByText(/Filters/i);
  expect(linkElement).toBeInTheDocument();
});
