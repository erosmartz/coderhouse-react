import ShopCartList from "../../components/ShopCartList/ShopCartList";
import ShopForm from "../../components/ShopForm/ShopForm";

import { Container, Divider } from "@mui/material";

const Shop = () => {
  return (
    <Container maxWidth="md">
      <ShopCartList />
      <Divider />
      <Container maxWidth="sm">
        <ShopForm />
      </Container>
    </Container>
  );
};

export default Shop;
