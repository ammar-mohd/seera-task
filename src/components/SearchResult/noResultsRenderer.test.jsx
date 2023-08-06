// NoResultsRenderer.test.js
import { render } from "@testing-library/react";
import NoResultsRenderer from "./NoResultsRenderer";

test('renders the "No Result Found!" message and the icon correctly', () => {
  // Render the NoResultsRenderer component
  const { getByText, getByTestId } = render(<NoResultsRenderer />);

  // Assert that the "No Result Found!" message is rendered correctly
  const noResultMessage = getByText("No Result Found!");
  expect(noResultMessage).toBeInTheDocument();

  // Assert that the icon is rendered correctly
  const iconElement = getByTestId("error-icon");
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveStyle("font-size: 100px");
});
