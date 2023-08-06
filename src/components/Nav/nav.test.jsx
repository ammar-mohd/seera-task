import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Nav from "./Nav";

test("renders the Nav component with the correct elements and styles", () => {
  const { getByAltText, getByText } = render(<Nav />);

  const seeraLogo = getByAltText("Seera");
  const almosaferLogo = getByAltText("Almosafer");
  const heading = getByText("GitHub Search");

  expect(seeraLogo).toBeInTheDocument();
  expect(seeraLogo).toHaveStyle("width: 100px");
  expect(seeraLogo).toHaveStyle("margin-right: 16px");

  expect(almosaferLogo).toBeInTheDocument();
  expect(almosaferLogo).toHaveStyle("width: 100px");
  expect(almosaferLogo).toHaveStyle("margin-left: 16px");

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveStyle("flex-grow: 1");
  expect(heading).toHaveClass("text-center text-black");
});
