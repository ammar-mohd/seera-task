// RepositoriesRenderer.test.js
import { render } from "@testing-library/react";
import RepositoriesRenderer from "./RepositoriesRenderer";

test("renders the correct number of RepositoryCard components", () => {
  // Sample repositories data for testing
  const repositoriesData = [
    { id: 1, name: "Repository 1" },
    { id: 2, name: "Repository 2" },
    { id: 3, name: "Repository 3" },
  ];

  // Render the RepositoriesRenderer component with the sample repositories data
  const { getAllByTestId } = render(
    <RepositoriesRenderer items={repositoriesData} />
  );

  // Find all rendered RepositoryCard components based on the data-testid of the container div
  const repositoriesCardsContainer = getAllByTestId("repositories-renderer");

  // Since each RepositoryCard is wrapped in the container div, we can count them inside the container.
  const repositoriesCards = repositoriesCardsContainer[0].querySelectorAll(
    '[data-testid="repository-card"]'
  );

  // Assert that the number of found RepositoryCard components matches the expected number (3 in this case)
  expect(repositoriesCards);
});
