import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
  return (
    <div>
      
      <MenuItem>
        <IconButton size="large" aria-label="show the cart" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </MenuItem>

    </div>
  )
}

export default CartWidget;