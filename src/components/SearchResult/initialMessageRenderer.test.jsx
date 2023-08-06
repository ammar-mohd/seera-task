// initialMessageRenderer.test.jsx
import { render, screen } from "@testing-library/react";
import InitialMessageRenderer from "./InitialMessageRenderer";

test("renders the initial message correctly", () => {
  render(<InitialMessageRenderer />);
  const initialMessage = screen.queryByText((content, element) => {
    // Use a custom text matcher to check if the content contains the expected text
    return content.includes("Type keywords to find what you're looking for!");
  });

  expect(initialMessage).toBeInTheDocument();
});
