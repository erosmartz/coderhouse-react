import { Container } from "@mui/material";
import NewsList from "../../components/NewsList/NewsList";

/* API */
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const apiSearch =
  "https://newsapi.org/v2/everything?language=es&q=juegos&apiKey=";

async function fetchGamingNews() {
  const response = await fetch(apiSearch + apiKey);
  const data = await response.json();
  return data.articles;
}

const gamingNews = await fetchGamingNews();

const News = () => {
  const TopArticles = gamingNews.slice(0, 10);
  return (
    <Container maxWidth="lg">
      <NewsList TopArticles={TopArticles} />
    </Container>
  );
};

export default News;
