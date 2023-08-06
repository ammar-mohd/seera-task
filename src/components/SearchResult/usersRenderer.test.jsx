import { render } from "@testing-library/react";
import UsersRenderer from "./UsersRenderer";
import "@testing-library/jest-dom";

const usersData = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

test("renders the correct number of UsersCard components", () => {
  const { queryAllByTestId } = render(<UsersRenderer items={usersData} />);

  const usersCards = queryAllByTestId("users-card");

  expect(usersCards);
});
