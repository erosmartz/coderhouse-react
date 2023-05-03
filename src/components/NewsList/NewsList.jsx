/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import '../../App.css'

const NewsList = ({TopArticles}) => {

    const formatDate = (dateString) => {
        const date = dateString.slice(8, 10);
        const month = dateString.slice(5, 7);
        const time = dateString.slice(11, 16);
        return `${date}-${month} a las ${time}`;
      };

  return (
    <Container
      sx={{
        my: "80px",
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
      }}>
      {TopArticles.map((article, index) => (
        <Link to={article.url} key={index} style={{textDecoration:'none'}} target="_blank" className="hover">
        <Card key={index} sx={{ maxWidth: 500, flexBasis: "calc(50% - 5px)" }}>
        
          <CardHeader title={article.title} subheader={formatDate(article.publishedAt)} />
          <CardMedia
            component="img"
            height="350"
            image={article.urlToImage}
            alt={article.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {article.description}
            </Typography>
          </CardContent>
        </Card>
        </Link>
      ))}
    </Container>
  );
};

export default NewsList;
