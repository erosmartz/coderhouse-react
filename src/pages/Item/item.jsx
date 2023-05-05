/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { Container } from "@mui/material";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const Item = () => {
  let { id } = useParams();
  return (
    <Container>
      <GoBackButton/>
      <ItemDetails />
    </Container>
  );
};

export default Item;
