import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F2F2F2" }}
      >
        <Toolbar />
        <Container sx={{ height: "100vh" }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default AppLayout;
