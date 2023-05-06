/* eslint-disable react/prop-types */

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TrackingTable = ({trackedOrder}) => {
  const calculateTotalPrice = () => {
    return trackedOrder.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalQuantity = trackedOrder.reduce((acc, item) => acc + item.quantity, 0);

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Juego</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackedOrder.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">{`$ ${item.price}`}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Subtotal:</StyledTableCell>
            <StyledTableCell align="right">{totalQuantity}</StyledTableCell>
            <StyledTableCell align="right">{`$ ${calculateTotalPrice()}`}</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TrackingTable








