import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";


test("renders Wiki title", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Wiki/i);
  expect(linkElement).toBeInTheDocument();
});




// import "@testing-library/jest-dom/extend-expect";
// import { prettyDOM } from "@testing-library/dom";

// describe("Testando componente Header", () => {
//   // beforeEach(() => render(<Header />));
//   test('renders "Planning/ Nombre del Proyecto"', () => {
//     render(<Header />);
//     // Act
//     const h1Element = screen.getByText("Planning/ Nombre del Proyecto");
//     console.log(prettyDOM(h1Element));
//     // Assert
//     expect(h1Element).toBeInTheDocument();
//   });
//   test('submenu buttons have class "btn-yellow"', () => {
//     render(<Header />);
//     // Act
//     const button1 = screen.getByText("Presupuestos");
//     console.log(prettyDOM(button1));
//     const button2 = screen.getByText("Gantt");
//     console.log(prettyDOM(button2));
//     // Assert
//     expect(button1).toHaveClass("btn-yellow");
//     expect(button2).toHaveClass("btn-yellow");
//   });
// });