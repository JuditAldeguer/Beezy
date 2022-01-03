import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";

describe("Testing component Footer", () => {
  test("renders Footer link", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Breaking/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Footer link target='_blank'", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Api/i);
    console.log(prettyDOM(linkElement));
    const targetAtribute = linkElement.getAttribute("target");
    expect(targetAtribute).toBe("_blank");
  });
});