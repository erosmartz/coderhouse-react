/* eslint-disable react-hooks/exhaustive-deps */

/* REACT */
import { useState, useEffect } from "react";

/* COMPONENTS */
import Spinner from "../Spinner/Spinner";

import '../../App.css'

/* MATERIAL UI */
import ProductCard from "../ProductCard/ProductCard";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

/* REACT-ROUTER-DOM */
import { Link, useParams } from "react-router-dom";

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

/* THEME */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "null" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemList = () => {
  /* FIREBASE GET */
  const [games, setGames] = useState([]);

  const { genre } = useParams();

  useEffect(() => {
    const getGames = async () => {
      const q = genre
        ? query(collection(db, "games"), where("genre", "==", genre))
        : query(collection(db, "games"));

      const querySnapshot = await getDocs(q);
      const docs = [];
      
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setGames(docs);
    };
    getGames();
  }, [genre]);

  return (
    <Container style={{marginBottom:'100px'}}>
      {games.length < 1 ? (
        <Spinner />
      ) : (
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid key={game.id} xs={3}>
              <Link to={`/item/${game.id}`} style={{ textDecoration: "none" }} className="hover">
                <Item key={game.id}>
                  <ProductCard game={game} />
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ItemList;
