import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router-dom";
import TextBlock from "../components/TextBlock";
import { useGetEmployeeDetailsQuery } from "../services/employeeAPI";
import Spinner from "../components/Spinner";

function EmployeeDetails() {
  const { employeeId } = useParams();

  const { data: employee, isLoading } = useGetEmployeeDetailsQuery({
    employeeId: employeeId,
  });

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  return (
    <Box my={3}>
      <Paper>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="First Name"
                  secondaryText={employee?.data?.firstName}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="Last Name"
                  secondaryText={employee?.data?.lastName}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="Email"
                  secondaryText={employee?.data?.email}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="Address"
                  secondaryText={employee?.data?.address}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="Gender"
                  secondaryText={employee?.data?.gender}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={3} lg={3} sx={{ margin: 3 }}>
                <TextBlock
                  primaryText="Mobile"
                  secondaryText={employee?.data?.mobile}
                />
              </Grid>

              <Grid item xs={3} sx={{ margin: 3 }}>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => navigate("/employee/edit/" + employeeId)}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default EmployeeDetails;
