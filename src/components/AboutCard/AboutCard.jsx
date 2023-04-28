import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MediaControlCard() {


  return (
    <Card sx={{ display: 'flex', justifyContent:'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Eros Martínez
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Estudiante Desarrollo Web
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            Coderhouse
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="linkedin">
            <LinkedInIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="github">
            <GitHubIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="twitter">
            <TwitterIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 235 }}
        image="https://avatars.githubusercontent.com/u/107828862?v=4"
        alt="avatar"
      />
    </Card>
  );
}