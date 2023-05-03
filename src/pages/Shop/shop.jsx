import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import ShopCartList from "../../components/ShopCartList/ShopCartList";
import ShopForm from "../../components/ShopForm/ShopForm";

import { Box, Container, Divider } from "@mui/material";

const Shop = () => {
  const {cart, setCart} = useContext(CartContext);
  return (
    <Container maxWidth="md">
        <Box>
          <ShopCartList />
          <Divider />
          <Container maxWidth="sm">
            <ShopForm cart={cart} setCart={setCart}/>
          </Container>
        </Box>
    </Container>
  );
};

export default Shop;
