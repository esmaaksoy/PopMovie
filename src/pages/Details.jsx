import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import defaultImage from "../assets/defaultImage.png";
import { Helmet } from "react-helmet";
import { LuPopcorn } from "react-icons/lu";
const Details = () => {
  const navigate = useNavigate();
  // Added code to extract the 'id' parameter from the URL using useParams.
  const { id } = useParams();

  //Define state variables
  const [movieDetail, setMovieDetail] = useState({});
  const [video, setVideo] = useState({});

  // Define API key and URLs for movie details and video
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  // Function to fetch movie details
  const getMovieDetail = async () => {
    try {
      const { data } = await axios(movieDetailUrl);
      setMovieDetail(data);
    } catch (error) {}
  };
  // Function to fetch video data
  const getVideo = async () => {
    try {
      const { data } = await axios(videoUrl);
      setVideo(data.results[0].key);
    } catch (error) {}
  };

  // Fetch movie details and video when the page loads
  useEffect(() => {
    getMovieDetail();
    getVideo();
  }, []);

  // Destructure movie details
  const {
    title,
    poster_path,
    genres,
    release_date,
    production_companies,
    overview,
    vote_average,
    spoken_languages,
    runtime,
  } = movieDetail;

  // Convert the total runtime in minutes to hours and minutes format.
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = `${hours}h ${minutes}min`;
  console.log(movieDetail)
  return (
    <>
      <Helmet>
        <title>Detail | Movie App</title>
        <meta name="description" content="Movie Detail Page" />
      </Helmet>
      <div className="detail">
        <div className="homeIcon" onClick={() => navigate("/")}>
          <LuPopcorn className="icon" />
          <p>Home</p>
        </div>
        <div className="video">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video}`}
            width="100%"
            height="100%"
          />
        </div>
        <div className="movie">
          <div className="image">
            <img
              alt="movie"
              src={poster_path ? IMG_API + poster_path : defaultImage}
            />
          </div>
          <div className="info">
            <div className="info-title">
              <p className="title">{title}</p>
              <p className="date">({new Date(release_date).getFullYear()})</p>
            </div>
            <div className="genres">
              {genres?.map((item) => (
                <button>{item?.name}</button>
              ))}
            </div>
            <div className="vote">
              <div>
                {" "}
                <p className="content">{vote_average?.toFixed(1)} / 10</p>
                <p>Average</p>
              </div>

              <div>
                {spoken_languages?.slice(0, 1).map((item) => (
                  <p className="content">{item?.english_name}</p>
                ))}
                <p>Languages</p>
              </div>
              <div>
                <p className="content">{formattedRuntime}</p>
                <p>Time</p>
              </div>
            </div>
            <div className="overView">
              <p>Overview</p>
              <p>{overview}</p>
            </div>
            <div className="companies">
              <p>Production Companies</p>
              <div className="companyNames">
                {production_companies?.slice(0, 2).map((item) => (
                  <p>{item?.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Details;
