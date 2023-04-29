import ShopForm from "../../components/ShopForm/ShopForm";

import { Container, Typography } from "@mui/material";

const Shop = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        align="center"
        variant="button"
        sx={{ fontSize: "30px", display: "flex", justifyContent: "center" }}>
        Carrito de compras
      </Typography>
      <ShopForm />
    </Container>
  );
};

export default Shop;
