import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from "../services/employeeAPI";
import { EmployeesResponse, IEmployee } from "../types/employeesType";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

function EmployeeList() {
  const { data: employees, isLoading } = useGetEmployeesQuery({});
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const employeesResponse: EmployeesResponse = employees;

  const navigate = useNavigate();

  function handleDelete(employeeId: string) {
    deleteEmployee({ employeeId })
      .then(() => {
        toast.success("Employee delete successfully!");
        window.location.reload();
      })
      .catch((err) => {
        const errors = err.data.errors;
        toast.error(errors);
      });
  }

  if (isLoading) return <Spinner />;

  const rows: IEmployee[] = employeesResponse?.data?.map((employee) => {
    return {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      address: employee.address,
      gender: employee.gender,
      mobile: employee.mobile,
      action: employee._id,
    };
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          my={2}
        >
          <Typography fontSize={20} fontWeight={700}>
            Employee List
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize" }}
            onClick={() => navigate("/employee/create")}
          >
            Add Employee
          </Button>
        </Stack>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} ml={3}>
                    <IconButton
                      aria-label="view"
                      size="small"
                      onClick={() =>
                        navigate("/employee/details/" + row.action)
                      }
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => handleDelete(row.action)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default EmployeeList;
