import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays initial status as OFF", () => {
  render(<App />);
  expect(screen.getByText("Status: OFF")).toBeInTheDocument();
});

test("changes status from OFF to ON", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /toggle/i }));
  expect(screen.getByText("Status: ON")).toBeInTheDocument();
});

test("changes status from ON to OFF", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /toggle/i });

  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText("Status: OFF")).toBeInTheDocument();
});
