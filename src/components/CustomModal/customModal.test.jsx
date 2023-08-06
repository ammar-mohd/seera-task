import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomModal from "./CustomModal";

test("renders the CustomModal component with children and styles", () => {
  const onClose = jest.fn();
  const children = <div>Test Content</div>;

  const { getByText } = render(
    <CustomModal open={true} onClose={onClose}>
      {children}
    </CustomModal>
  );

  const modalElement = getByText("Test Content");

  expect(modalElement).toBeInTheDocument();
  expect(modalElement.parentElement.parentElement).toHaveStyle(
    "position: absolute"
  );
  expect(modalElement.parentElement.parentElement).toHaveStyle("top: 50%");
  expect(modalElement.parentElement.parentElement).toHaveStyle("left: 50%");
  expect(modalElement.parentElement.parentElement).toHaveStyle(
    "transform: translate(-50%, -50%)"
  );
  expect(modalElement.parentElement.parentElement).toHaveStyle("width: 500px");
  expect(modalElement.parentElement.parentElement).toHaveStyle("height: 300px");

  expect(modalElement.parentElement).toHaveStyle("background: #fff");
  expect(modalElement.parentElement).toHaveStyle("padding: 20px");
  expect(modalElement.parentElement).toHaveStyle("borderRadius: 4px");
  expect(modalElement.parentElement).toHaveStyle("width: 100%");
  expect(modalElement.parentElement).toHaveStyle("height: 100%");
  expect(modalElement.parentElement).toHaveStyle("display: flex");
  expect(modalElement.parentElement).toHaveStyle(
    "boxShadow: 0 2px 6px rgba(0, 0, 0, 0.3)"
  );
  expect(modalElement.parentElement).toHaveStyle("alignItems: center");
  expect(modalElement.parentElement).toHaveStyle("flexDirection: column");
  expect(modalElement.parentElement).toHaveStyle("justifyContent: center");
});
