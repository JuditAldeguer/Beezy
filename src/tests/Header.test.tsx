import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Testando componente Header", () => {
  beforeEach(() => render(<Header />));
  test('renders "Planning/ Nombre del Proyecto"', () => {
    // Act
    const h1Element = screen.getByText("Planning/ Nombre del Proyecto");
    console.log(prettyDOM(h1Element));
    // Assert
    expect(h1Element).toBeInTheDocument();
  });
  test('submenu buttons have class "btn-yellow"', () => {
    // Act
    const button1 = screen.getByText("Presupuestos");
    console.log(prettyDOM(button1));
    const button2 = screen.getByText("Gantt");
    console.log(prettyDOM(button2));
    // Assert
    expect(button1).toHaveClass("btn-yellow");
    expect(button2).toHaveClass("btn-yellow");

  });
});
