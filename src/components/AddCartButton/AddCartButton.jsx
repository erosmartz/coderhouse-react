import React, { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const AddCartButton = ({ item }) => {
  const context = useContext(CartContext);

  const addToCart = (item, cart, setCart) => {
    const { name, price } = item;
    const newItem = { name, price, quantity: 1 };
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      const updatedCart = cart.map((item) =>
        item.name === name ? updatedItem : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
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
