/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
