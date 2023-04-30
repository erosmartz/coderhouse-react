import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Typography } from "@mui/material";
import ShopCartListTable from "./ShopCartListTable";

const ShopCartList = () => {
  const context = useContext(CartContext);

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        align="center"
        variant="button"
        sx={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          mb: 5,
        }}>
        Carrito de compras
      </Typography>

      <ShopCartListTable cart={context.cart} setCart={context.setCart} />
    </Container>
  );
};

export default ShopCartList;
