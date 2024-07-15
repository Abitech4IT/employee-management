import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetEmployeeDetailsQuery,
  useUpdateEmployeeMutation,
} from "../services/employeeAPI";
import { useState } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

function EmployeeUpdate() {
  const { employeeId } = useParams<{ employeeId: string }>();

  const [updateEmployee] = useUpdateEmployeeMutation();

  const { data: employee, isLoading } = useGetEmployeeDetailsQuery({
    employeeId: employeeId,
  });

  const [firstName, setFirstName] = useState(employee?.data.firstName);
  const [lastName, setLastName] = useState(employee?.data.lastName);
  const [email, setEmail] = useState(employee?.data.email);
  const [address, setAddress] = useState(employee?.data.address);
  const [gender, setGender] = useState(employee?.data.gender);
  const [mobile, setMobile] = useState(employee?.data.mobile);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const newUpdatedEmployee = {
        firstName,
        lastName,
        email,
        address,
        gender,
        mobile,
      };

      const req = updateEmployee({ employeeId, data: newUpdatedEmployee }).then(
        (data) => {
          toast.success("Update Employee successfully");
          //   navigate("/employee");
          window.location.assign("/employee");
          console.log(data);
        }
      );
      req.catch((err) => {
        const errors = err.data.errors;
        toast.error("Update failed:", errors);
        console.log(errors);
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <Paper>
        <Grid container>
          <Grid item sm={12}>
            <Stack direction="row" justifyContent="space-between" m={2}>
              <Button
                startIcon={<ArrowBackIosNewIcon />}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>First Name</InputLabel>
              <TextField
                required
                name="firstName"
                placeholder="First Name"
                fullWidth
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(() => e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>Last Name</InputLabel>
              <TextField
                required
                name="lastName"
                placeholder="Last Name"
                fullWidth
                size="small"
                value={lastName}
                onChange={(e) => setLastName(() => e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>Email</InputLabel>
              <TextField
                required
                name="email"
                placeholder="Email"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(() => e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>Address</InputLabel>
              <TextField
                required
                name="address"
                placeholder="Address"
                fullWidth
                size="small"
                value={address}
                onChange={(e) => setAddress(() => e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>Mobile</InputLabel>
              <TextField
                required
                name="mobile"
                placeholder="Mobile"
                fullWidth
                size="small"
                value={mobile}
                onChange={(e) => setMobile(() => e.target.value)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={0.5} m={2}>
              <InputLabel>Gender</InputLabel>
              <TextField
                select
                size="small"
                value={gender}
                onChange={(e) => setGender(() => e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={0.5} m={2}>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default EmployeeUpdate;
