import Navbar from "../components/Navbar";
import bg from "../assets/headerBG.png";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const seriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

  // Function to fetch popular movies
  const getMovies = async () => {
    const { data } = await axios(movieUrl);
    setMovie(data.results);
  };

  // Function to fetch popular TV series
  const getSeries = async () => {
    const { data } = await axios(seriesUrl);
    setSeries(data.results);
  };

  // Fetch popular movies and TV series when the page loads
  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

// A random item has been selected for the movie 
const movieWithScore = movie.filter(item=>item.vote_average >= 7)
  const randomIndexMovie = Math.floor(Math.random() * movieWithScore.length);
  const randomItemMovie = movieWithScore[randomIndexMovie];

// A random item has been selected for the serie 
const serieWithScore = series.filter(item=>item.vote_average >= 7)
  const randomIndexSerie = Math.floor(Math.random() * serieWithScore.length);
  const randomItemSerie = serieWithScore[randomIndexSerie];

  return (
    <>
      <Navbar />
      <header>
        <img src={bg} alt="image" />
        <div className="container">
          <MovieCard {...randomItemMovie} />
          <div className="text">
            <p>Welcome to the</p>
            <p>World of TV Series & Movies</p>
          </div>
          <MovieCard {...randomItemSerie} />
        </div>
      </header>
      <div className="movieContainer" id="movies">
        <p>Populer Movies</p>
        <div className="movieCard">
          {movie.slice(0, 8).map((item, index) => (
            <MovieCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="movieContainer" id="tv-series">
        <p>Populer TV Series</p>
        <div className="movieCard">
          {series.slice(0, 8).map((item, index) => (
            <MovieCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
