import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import defaultImage from "../assets/defaultImage.png";
const Details = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [video, setVideo] = useState({});
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const getMovieDetail = async () => {
    try {
      const { data } = await axios(movieDetailUrl);
      setMovieDetail(data);
    } catch (error) {}
  };
  const getVideo = async () => {
    try {
      const { data } = await axios(videoUrl);
      setVideo(data.results[0].key);
    } catch (error) {}
  };
  useEffect(() => {
    getMovieDetail();
    getVideo();
  }, []);
  const {
    title,
    poster_path,
    genres,
    release_date,
    production_companies,
    overview,
    vote_count,
    vote_average,
    spoken_languages,
    runtime,
  } = movieDetail;
  console.log(movieDetail);
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = `${hours}h ${minutes}min`;
  return (
    <div className="detail">
      <div className="movie">
        <div className="image">
          <img
            alt="Guitar"
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
              <p className="content">{vote_count}</p>
              <p>Count</p>
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
                {production_companies?.slice(0, 3).map((item) => (
              <p>{item?.name}</p>
            ))}
            </div>
          
          </div>

          <div className="companies">
            <p>Langues</p>
            <div className="companyNames">  {spoken_languages?.slice(0, 3).map((item) => (
              <p>{item?.name}</p>
            ))}</div>
          
          </div>
        </div>
      </div>

      <div className="video">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} />
      </div>
    </div>
  );
};

export default Details;
