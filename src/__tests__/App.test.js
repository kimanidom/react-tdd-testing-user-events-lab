// src/__tests__/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders the form inputs and submit button", () => {
  render(<App />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/technology/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});

test("submits the form and displays success message", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "john@example.com" },
  });

  fireEvent.click(screen.getByLabelText(/technology/i));
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(screen.getByText(/thank you, john doe!/i)).toBeInTheDocument();
  expect(screen.getByText(/you selected: technology/i)).toBeInTheDocument();
});
