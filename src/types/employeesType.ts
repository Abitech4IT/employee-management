interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  mobile: string;
  gender: string;
}

export interface EmployeesResponse {
  data: Employee[];
  message: string;
  success: boolean;
}

export interface EmployeeDetailsResponse {
  data: Employee;
  message: string;
  success: boolean;
}

export interface IEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  mobile: string;
  gender: string;
  action: string;
}
