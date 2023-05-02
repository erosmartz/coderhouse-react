import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import ShopCartList from "../../components/ShopCartList/ShopCartList";
import ShopForm from "../../components/ShopForm/ShopForm";

import { Box, Container, Divider, Typography } from "@mui/material";

const Shop = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container maxWidth="md">
      {cart.length > 0 ? (
        <Box>
          <ShopCartList />
          <Divider />
          <Container maxWidth="sm">
            <ShopForm cart={cart}/>
          </Container>
        </Box>
      ) : (
        <Box sx={{mt:15}}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              mb: 5,
            }}>
            Tu Carrito de compras está vacío! <br/> {`Agrega algo para ver tu carrito :)`}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Shop;
