import Navbar from "../components/Navbar";
import bg from "../assets/headerBG.png";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
const Home = () => {

 // Variable declarations
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const seriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  const customClassName1 = {
    movieTitle: "title1",
    cards: "card1",
    averages: "average1",
  };
  const customClassName2 = {
    movieTitle: "title2",
    cards: "card2",
    averages: "average2",
  };
  
  // Function to fetch popular movies
  const getMovies = async () => {
    try {
      const { data } = await axios(movieUrl);
      setMovie(data.results);
    } catch (error) {}
  };

  // Function to fetch popular TV series
  const getSeries = async () => {
    try {
      const { data } = await axios(seriesUrl);
      setSeries(data.results);
    } catch (error) {}
  };

  // Fetch popular movies and TV series when the page loads
  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  // A random item has been selected for the movies
  const movieWithScore = movie.filter((item) => item.vote_average >= 7);
  const randomIndexMovie = Math.floor(Math.random() * movieWithScore.length);
  const randomItemMovie = movieWithScore[randomIndexMovie];

  // A random item has been selected for the series
  const serieWithScore = series.filter((item) => item.vote_average >= 7);
  const randomIndexSerie = Math.floor(Math.random() * serieWithScore.length);
  const randomItemSerie = serieWithScore[randomIndexSerie];

  return (
    <>
      <Helmet>
        <title>Home | Movie App</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Navbar />
      <div className="home">
      <header>
        <img src={bg} alt="image" />
        <div className="container">
          <MovieCard {...randomItemMovie} customClassName={customClassName1} />
          <div className="text">
            <p>Welcome to the</p>
            <p>World of TV Series & Movies</p>
          </div>
          <MovieCard {...randomItemSerie} customClassName={customClassName1} />
        </div>
      </header>
      <div className="movieContainer" id="movies">
        <p>Populer Movies</p>
        <div className="movieCard">
          {movie.slice(0, 8).map((item, index) => (
            <MovieCard
              key={index}
              {...item}
              customClassName={customClassName2}
            />
          ))}
        </div>
      </div>
      <div className="movieContainer" id="tv-series">
        <p>Populer TV Series</p>
        <div className="movieCard">
          {series.slice(0, 8).map((item, index) => (
            <MovieCard
              key={index}
              {...item}
              customClassName={customClassName2}
            />
          ))}
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Home;
