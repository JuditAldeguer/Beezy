import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";

describe("Testing component Header", () => {  
  beforeEach(() => render(<Router><Header /></Router>));
  test("renders Header link", () => {
    const linkElement = screen.getByText(/Breaking/i);
    console.log(prettyDOM(linkElement));
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Header link-scroll", () => {
    const linkElement = screen.getByText(/Filters/i);
    console.log(prettyDOM(linkElement));
    expect(linkElement).toBeInTheDocument();
  });
});