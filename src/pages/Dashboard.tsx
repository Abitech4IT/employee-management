import { Box, Paper, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Box>
      <Paper sx={{ padding: 7, marginTop: 5 }}>
        <Box my={7}>
          <Typography textAlign="center" variant="h3">
            Welcome
          </Typography>
          <Typography textAlign="center" variant="h6">
            Uptick Talent Employee Management System
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;
