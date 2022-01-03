import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";

describe("Testing component Header", () => {
  test("renders Header link", () => {
    render(<Router><Header /></Router>);
    const linkElement = screen.getByText(/Breaking/i);
    console.log(prettyDOM(linkElement));
    expect(linkElement).toBeInTheDocument();
  });
});