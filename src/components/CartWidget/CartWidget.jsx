import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
   
  const {totalQuantity} = useContext(CartContext);



  return (
    <div>
      <Link to="/shop" key="/shop" >
        <IconButton size="large" aria-label="show the cart" color="white">
          <Badge badgeContent={totalQuantity} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartWidget;
