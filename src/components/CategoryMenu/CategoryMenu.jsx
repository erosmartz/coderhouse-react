/* eslint-disable no-unused-vars */
import * as React from 'react';

import { Link } from "react-router-dom"

import { useState, useEffect } from "react";


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where, documentId} from "firebase/firestore";

const CategoryMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* FIREBASE GET */
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const q = query(collection(db, "games"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      const uniqueGenres = docs.reduce((acc, game) => {
        if (!acc.includes(game.genre)) {
          acc.push(game.genre);
        }
        return acc;
      }, []);

      setGames(uniqueGenres);
    };
    getGames();
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: "white", display: "block" }}>
        Catálogo
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "white" }}
          key={"/"}>
          <MenuItem onClick={handleClose}>Todos</MenuItem>
        </Link>

        {games.map((genre) => {
          return (
            <Link
              to={`/generos/${genre/* .toLowerCase() */}`}
              style={{ textDecoration: "none", color: "white" }}
              key={genre}>
              <MenuItem onClick={handleClose}>{`${genre}`}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </div>
  );
};

export default CategoryMenu;