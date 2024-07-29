import { render, screen } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";

test("first name input should be rendered", () => {
  render(<EmployeeForm />);
  const firstNameInputEl = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameInputEl).toBeInTheDocument();
});
