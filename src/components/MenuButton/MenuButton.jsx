import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

const CategoryMenu = ({ categories }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todo');

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    handleClose();
  };

  return (
    <div>
      <Button
        id="category-dropdown"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
      >
        <MenuItem onClick={() => handleMenuItemClick('Todo')}>Todo</MenuItem>
        {categories.map((category) => (
          <MenuItem
            key={category}
            onClick={() => handleMenuItemClick(category)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
      <Typography variant='subtitle2' sx={{display:'inline', ml:'2rem'}} >{`Estás viendo: ${selectedCategory}`}</Typography>
    </div>
  );
}

export default CategoryMenu;