import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmployeeDetailsResponse, IEmployee } from "../types/employeesType";

// import dotenv from "dotenv";

// dotenv.config();

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;
// export const baseUrl = process.env.VITE_APP_BASE_URL;

export const employeeAPI = createApi({
  reducerPath: "EmployeeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("authorization", "Bearer " + localStorage.getItem("access"));
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "/employees",
    }),
    getEmployeeDetails: builder.query<
      EmployeeDetailsResponse,
      { employeeId: string | undefined }
    >({
      query: (params) => `/employees/${params.employeeId}`,
    }),
    createEmployee: builder.mutation({
      query: (initial) => ({
        url: `/employees`,
        method: "POST",
        body: initial,
      }),
    }),
    updateEmployee: builder.mutation<
      EmployeeDetailsResponse,
      { employeeId: string | undefined; data: Partial<IEmployee> }
    >({
      query: ({ employeeId, data }) => ({
        url: `/employees/${employeeId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (data) => ({
        url: `/employees/${data.employeeId}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeDetailsQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeAPI;
