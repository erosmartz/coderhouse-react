

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/shop" key="/shop" >
        <IconButton size="large" aria-label="show the cart" color="white">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartWidget;
