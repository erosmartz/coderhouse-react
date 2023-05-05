import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Typography } from "@mui/material";

const CartWidget = () => {
   
  const {totalQuantity} = useContext(CartContext);



  return (
    <div>
      <Link to="/shop" key="/shop" style={{textDecoration:'none', color:'inherit'}}>
        <IconButton size="large" aria-label="show the cart" color="white" sx={{fontSize:'100%', borderRadius:4}}>
        <Typography variant="subtitle2">CARRITO &nbsp;</Typography>
          <Badge badgeContent={totalQuantity} color="error">
            
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartWidget;
