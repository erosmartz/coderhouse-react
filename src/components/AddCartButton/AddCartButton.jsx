import React, { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const AddCartButton = ({ item }) => {
  const context = useContext(CartContext);

  const addToCart = (item, cart, setCart) => {
    setCart([...cart, item]);
  };

  return (
    <Button
      onClick={() => {
        addToCart(item, context.cart, context.setCart);
      }}
      variant="outlined"
      color="success"
      sx={{ mt: 5, fontSize: "20px" }}>
      Agregar al Carrito
    </Button>
  );
};

export default AddCartButton;
