/* eslint-disable react/prop-types */
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const ShopMsg = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Genial!</AlertTitle>
        Tu compra ha sido realizada — Chequeá tu casilla de e-mail! <br />
        Código de tracking - no lo pierdas! ---- <strong>{purchaseID}</strong>
      </Alert>
    </Stack>
  );
};

export default ShopMsg;
