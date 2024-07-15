import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Spinner() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress sx={{ margin: "auto" }} />
    </Box>
  );
}

export default Spinner;
