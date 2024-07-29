import { render, screen } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";

test("first name input should be rendered", () => {
  render(<EmployeeForm />);
  const firstNameInputEl = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameInputEl).toBeInTheDocument();
});

test("last name input should be rendered", () => {
  render(<EmployeeForm />);
  const lastNameInputEl = screen.getByPlaceholderText(/Last Name/i);
  expect(lastNameInputEl).toBeInTheDocument();
});

test("email input should be rendered", () => {
  render(<EmployeeForm />);
  const emailInputEl = screen.getByPlaceholderText(/Email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("address input should be rendered", () => {
  render(<EmployeeForm />);
  const addressInputEl = screen.getByPlaceholderText(/Address/i);
  expect(addressInputEl).toBeInTheDocument();
});

test("mobile input should be rendered", () => {
  render(<EmployeeForm />);
  const mobileInputEl = screen.getByPlaceholderText(/Mobile/i);
  expect(mobileInputEl).toBeInTheDocument();
});

test("gender select should be rendered", () => {
  render(<EmployeeForm />);
  const genderInputEl = screen.getByTestId("mytestId");
  expect(genderInputEl).toBeInTheDocument();
});
