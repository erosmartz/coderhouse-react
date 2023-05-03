/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
