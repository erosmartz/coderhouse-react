/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({game}) => {
  return (
    <Card sx={{maxWidth: 375}}>
      <CardMedia
        component="img"
        alt="https://www.iforium.com/wp-content/uploads/Placeholder-Image-400.png"
        height="350"
        image={game.img}
        title={game.name}
      />
      <CardContent sx={{height:'100px', pb: 1}}>
        <Typography  variant="h6" component="div">
          {game.name}
        </Typography>
        <Typography variant='subtitle2' color="text.secondary">
          {game.genre}
        </Typography>
        
        
      </CardContent>
      
      <CardActions sx={{ justifyContent:'space-between', pt: 0}}>
      <Typography variant='subtitle2' color='primary' >
          ⭐{game.rating}
      </Typography>  

      <Typography 
        variant="subtitle1" color="text.secondary" sx={{mr: '10px', color:'darkseagreen'}}>
          ${game.price}
      </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductCard;