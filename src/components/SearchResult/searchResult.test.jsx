import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResult from "./SearchResult";

test("renders loading state with skeletons", () => {
  const mockSearch = {
    searchResults: null,
    type: "users",
    loading: true,
    itemsNum: 0,
    query: "",
    setSearchResultToDefault: jest.fn(),
    resetPageNum: jest.fn(),
    fetchResponse: jest.fn(),
  };

  const { container } = render(<SearchResult search={mockSearch} />);

  const skeletonElements = container.querySelectorAll(".skeleton");
  expect(skeletonElements.length).toBeGreaterThan(0);
});
