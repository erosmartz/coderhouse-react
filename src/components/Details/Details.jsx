import * as React from 'react';
import { useLocation } from 'react-router-dom';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const Details =  () => {

  
  const { state: { data } } = useLocation();



  return (


    <Card sx={{ display: 'flex', justifyContent:'space-between', flexDirection:'row' }}>

    <CardMedia
        component="img"
        sx={{ width: 250, height:350 }}
        image={data.imagen}
        alt="avatar"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
          {data.nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div">
          {`Genero: ${data.genero}`}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
          {`Rating: ⭐${data.rating}`}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button 
          variant='outlined' 
          size="large"
          color='success'>
            {`Precio: $${data.precio}`}
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default Details;