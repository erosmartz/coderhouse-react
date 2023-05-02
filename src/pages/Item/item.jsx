import { useParams } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { Box, Container, Typography } from "@mui/material";

const Item = () => {
  let { id } = useParams();
  return (
    <Container>
      <ItemDetails />
    </Container>
  );
};

export default Item;
