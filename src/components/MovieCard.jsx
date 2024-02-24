import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/defaultImage.png";

const MovieCard = ({
  title,
  vote_average,
  poster_path,
  id,
  name,
  customClassName,
}) => {
  
  //Variable declarations
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const { movieTitle, cards, averages } = customClassName;
  const navigate = useNavigate();

  return (
    <div className="cardContainer" onClick={() => navigate(`/details/${id}`)}>
      <div className={`average ${averages}`}>
        <p>
          <span>{vote_average?.toFixed(1)}</span>
          /10
        </p>
      </div>
      <div className={`card ${cards}`}>
        <img
          alt="movie"
          src={poster_path ? IMG_API + poster_path : defaultImage}
        />
        <div className={`title ${movieTitle}`}>
          <p className="text">{title || name}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
