
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center", my:"100px" }}>
      <CircularProgress color="inherit" size="200px"/>
    </Box>
  );
}

export default Spinner;