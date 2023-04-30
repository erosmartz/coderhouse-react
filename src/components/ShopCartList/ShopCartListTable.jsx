import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ShopCartListTable = ({cart, setCart}) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


  const handleRemoveItem = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
      setCart(updatedCart);
    }
  };
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Juego</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">{`$ ${item.price}`}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="delete" size="small" onClick={() => handleRemoveItem(item)}>
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Subtotal:</StyledTableCell>
            <StyledTableCell align="right">{totalQuantity}</StyledTableCell>
            <StyledTableCell align="right">{`$ ${calculateTotalPrice()}`}</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default ShopCartListTable;
