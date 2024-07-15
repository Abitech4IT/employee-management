import AppLayout from "./components/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store/store";
import UpdateEmployee from "./pages/UpdateEmployee";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employee" element={<Employees />} />
            <Route path="employee/create" element={<AddEmployee />} />
            <Route
              path="employee/details/:employeeId"
              element={<EmployeeDetails />}
            />
            <Route
              path="employee/edit/:employeeId"
              element={<UpdateEmployee />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px, 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />
    </Provider>
  );
}

export default App;
