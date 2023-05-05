/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const AddCartButton = ({ item, amount, setCounter }) => {
  const context = useContext(CartContext);

  const addToCart = (item, cart, setCart) => {
    const { name, price } = item;
    const newItem = { name, price, quantity: amount };
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + amount,
      };
      const updatedCart = cart.map((item) =>
        item.name === name ? updatedItem : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, context.cart, context.setCart);
    setCounter(0);
  };

  return (
    <Button
      disabled={amount === 0}
      onClick={handleAddToCart}
      variant="outlined"
      color="success"
      sx={{ mt: 5, fontSize: "20px" }}>
      Agregar al Carrito ({amount})
    </Button>
  );
};

export default AddCartButton;
