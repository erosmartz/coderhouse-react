/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
      <CardContent sx={{ pb: 0}}>
        <Typography noWrap variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {game.genre}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent:'space-between', pt: 0}}>
      <Button size="large"color='primary'>
          ⭐{game.rating}
      </Button>  
      <Typography 
        variant="subtitle1" color="text.secondary" sx={{mr: '10px', color:'darkseagreen'}}>
          ${game.price}
      </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductCard;