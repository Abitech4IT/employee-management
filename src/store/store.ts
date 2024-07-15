import { configureStore } from "@reduxjs/toolkit";
import { employeeAPI } from "../services/employeeAPI";

export default configureStore({
  reducer: {
    [employeeAPI.reducerPath]: employeeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([employeeAPI.middleware]),
});
