import React from 'react'
import { useState, useEffect } from "react";



import ProductCard from "../ProductCard/ProductCard"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";


/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where} from "firebase/firestore";



/* THEME */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'null' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));




const ItemList = () => {

/* FIREBASE TRAER */
  const [games, setGames] = useState([])

  const q = query(collection(db, "games"))

  useEffect(() => {
    const getGames = async() => {
      const querySnapshot = await getDocs(q);
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      });

      setGames(docs)
    }
    getGames()
  }, [])


  return (


      <Container>
        <Grid container spacing={2}> 
          {games.map((game) => (
            <Grid key={game.id} xs={3}>
              <Link to={`/item/${game.id}`}
                style={{textDecoration: "none"}}
              >
                <Item key={game.id}> 
                  <ProductCard game={game} /> 
                </Item>
              </Link> 
            </Grid>
          ))}
        </Grid>
      </Container>

  )
}

export default ItemList
