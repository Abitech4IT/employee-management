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
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation } from "../services/employeeAPI";
import { useState } from "react";
import toast from "react-hot-toast";

function EmployeeForm() {
  const [createEmployee] = useCreateEmployeeMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !address || !gender || !mobile) {
      return toast.error("All field require");
    }

    try {
      const newEmployee = {
        firstName,
        lastName,
        email,
        address,
        gender,
        mobile,
      };
      const req = createEmployee(newEmployee).then((data) => {
        toast.success("Employee created successfully");
        console.log(data);

        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setGender("");
        setMobile("");
      });
      req.catch((err) => {
        const errors = err.data.errors;
        toast.error("Employee creation failed:", errors);
        console.log(errors);
      });
    } catch (error) {
      console.log(error);
    }
  }

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
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container>
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
                      data-testid="mytestId"
                      onChange={(e) => setGender(() => e.target.value)}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </TextField>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={0.5} m={2}>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default EmployeeForm;
