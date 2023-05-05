/* eslint-disable no-unused-vars */
/* REACT */
import { useState, useEffect } from "react";

import AddCartButton from "../AddCartButton/AddCartButton";

/* REACT ROUTER DOM */
import { Link, useParams } from "react-router-dom";

/* Material UI */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import Spinner from "../Spinner/Spinner";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "null" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetails = () => {
  let { id } = useParams();

  /* FIREBASE TRAER */
  const [game, setGame] = useState({});

  useEffect(() => {
    const getGame = async () => {
      const q = query(collection(db, "games"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      const [grabGame] = docs;

      setGame(grabGame || null);
    };
    getGame();
  }, [id]);

  if (!game) {
    return (
      <Container>
        <Box>
          <Typography
            variant="h4"
            component="div"
            align="center"
            sx={{ display: "flex", flexDirection: "column" }}>
            Whoops! Este juego no existe! <br />
            <Link to="/">
              {" "}
              <Button
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "orange",
                }}>
                {" "}
                Clickeá acá para ver nuestro catálogo.{" "}
              </Button>
            </Link>
          </Typography>
        </Box>
      </Container>
    );
  } else if (game.name === undefined && game.price === undefined) {
    return <Spinner style={{ marginBottom: "100px" }} />;
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid>
          <Item>
            <CardMedia
              component="img"
              sx={{ width: 350, height: 450 }}
              image={game.img}
              alt="avatar"
            />
          </Item>
        </Grid>

        <Grid xs={6} mdOffset="auto">
          <Item sx={{ mt: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{ textTransform: "uppercase", mb: 2 }}>
                  {game.name}
                </Typography>
                <Divider />
                <Typography
                  variant="h5"
                  color="text.secondary"
                  component="div"
                  sx={{ mt: 2, mb: 2 }}>
                  {`Género: ${game.genre}`}
                </Typography>
                <Divider />
                <Typography
                  variant="h6"
                  sx={{ mt: 2, mb: 2 }}
                  color="text.secondary"
                  component="div">
                  {`Rating: ⭐${game.rating}`}
                </Typography>
                <Divider />
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  pl: 1,
                  pb: 1,
                }}>
                <Typography variant="h6" color="text.secondary" component="div">
                  {`Precio: $${game.price}`}
                </Typography>
                <AddCartButton item={game} />
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
      {game.desc === undefined ? null : (
        <Grid container spacing={4} sx={{ my: 2 }}>
          <Grid>
            <Item>
              <Typography
                variant="h4"
                color="text.secondary"
                component="div"
                sx={{ my: 1 }}>
                Descripción
              </Typography>
              <Divider />
              <Typography variant="body1" sx={{ mt: 4, mb: 2 }} component="div">
                {game.desc}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ItemDetails;
