import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Employee Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
