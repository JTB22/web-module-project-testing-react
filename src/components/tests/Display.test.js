import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";

test("renders without errors with no props", async () => {
  render(<Display />);
  let button = screen.getByRole("button");
  let poster = screen.getByTestId("poster");
  expect(poster).toBeInTheDocument();
  expect(poster).toHaveAttribute(
    "src",
    "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
  );
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Press to Get Show Data");
});

test("renders Show component when the button is clicked ", async () => {
  render(<Display />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByTestId("show-container");
  let show = screen.getByTestId("show-container");
  expect(show).toBeInTheDocument();
});

test("renders show season options matching your data when the button is clicked", async () => {
  render(<Display />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByTestId("show-container");
  let show = screen.getByTestId("show-container");
  let seasonOptions = screen.getAllByTestId("season-option");
  expect(seasonOptions).toHaveLength(5);
  expect(seasonOptions[0]).toHaveTextContent("Season 1");
  expect(seasonOptions[1]).toHaveTextContent("Season 2");
  expect(seasonOptions[2]).toHaveTextContent("Season 3");
  expect(seasonOptions[3]).toHaveTextContent("Season 4");
  expect(seasonOptions[4]).toHaveTextContent("Season 5");
});
