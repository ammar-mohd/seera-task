import { render } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

test("renders children and applies classes", () => {
  const customClasses = "text-red-500";
  const headerText = "Hello, World!";

  const { getByText, container } = render(
    <Header classes={customClasses}>{headerText}</Header>
  );

  const renderedHeader = getByText(headerText);
  expect(renderedHeader).toBeInTheDocument();

  const headerElement = container.firstChild;
  expect(headerElement).toHaveClass(customClasses);
});
