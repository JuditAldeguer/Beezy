import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/secondary-c/List';
import  json  from "../services/data.json";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Characters list title", () => {
  const data = json;
  const isLoading = false;

  render(
    <Router>
      <List data={data} isLoading={isLoading} />
    </Router>
  );
  const linkElement = screen.getByText(/Characters list/i);
  expect(linkElement).toBeInTheDocument();
});
