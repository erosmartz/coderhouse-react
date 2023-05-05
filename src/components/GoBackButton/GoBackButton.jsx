import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Box style={{ display: 'flex', justifyContent:'center', margin: '25px 0px' }}>
      <Button
        onClick={() => navigate(-1)}
        color="primary"
        variant="outlined"
        startIcon={<ArrowBackIcon />}>
        Volver
      </Button>
    </Box>
  );
};

export default GoBackButton;
