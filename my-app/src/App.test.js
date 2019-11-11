import React from "react";
import { render } from "jest";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

//show hit
test("shows hit", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

//show foul works
test("foul works", () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});

//test all data-ids at once
test("returns all ball tags", () => {
  const { findAllByText } = render(<App />);
  findAllByText("ball");
});

//app test
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
