import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { useGetData } from "./custom/project-a/data";

test("renders learn react link", () => {
  render(<App />);
  const pageData = useGetData("IndexPage");

  const textElement = screen.getByText(pageData.header.rawContent);
  expect(textElement).toBeInTheDocument();
});
