
/* REACT */
import { useState, useEffect } from "react";

/* REACT ROUTER DOM */
import { useParams } from 'react-router-dom';

/* Material UI */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

/* FIREBASE */
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where, documentId} from "firebase/firestore";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'null' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ItemDetails =  () => {
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

      setGame(grabGame);
    };
    getGame();
  }, [id]);



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
          <Item>

              <Box sx={{ display: "flex", flexDirection: "column"}}>
                <CardContent sx={{ flex: "1 0 auto"}}>
                  <Typography component="div" variant="h2">
                    {game.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    component="div">
                    {`Genero: ${game.genre}`}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div">
                    {`Rating: ⭐${game.rating}`}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center",flexDirection:"column",  pl: 1, pb: 1 }}>
                  <Button variant="outlined" size="large" color="success">
                    {`Precio: $${game.price}`}
                    
                    
                  </Button>
                </Box>
              </Box>

          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemDetails;