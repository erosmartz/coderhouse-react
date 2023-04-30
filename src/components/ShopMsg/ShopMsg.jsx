/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";



const ShopMsg = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Genial!</AlertTitle>
        Tu compra ha sido realizada — Chequeá tu casilla de e-mail! <br />
        Abajo te dejamos tu código de tracking - <strong> No lo pierdas!</strong>
        <Chip label={purchaseID} variant="outlined" color="success" sx={{display:'flex', flexDirection:'column'}}/>
      </Alert>
      
    </Stack>

  );
};

export default ShopMsg;
