import avatar from "../assets/avatar.png";

const MovieDetails = ({
  actor,
  production_companies,
  tagline,
  production_countries,
}) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="detailSection">
      <div className="detailContainer">
        <div>
          <p className="heading">Casts</p>

          <div className="casts">
            {actor.slice(0, 6).map((item, index) => (
              <div className="castCard" key={index}>
                <img
                  alt="cast"
                  src={item.profile_path ? IMG_API + item.profile_path : avatar}
                />
                <div className="castText">
                  <p>{item.name}</p>
                  <p>{item.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="heading">Movie Details</p>
          <div className="movieDetail">
            <div className="companies">
              <p>Companies</p>
              <div className="companyNames">
                {production_companies?.slice(0, 2).map((item, index) => (
                  <p key={index}>{item?.name}</p>
                ))}
              </div>
            </div>
            <div className="companies">
              <p>Countries</p>
              <div className="companyNames">
                {production_countries?.slice(0, 3).map((item, index) => (
                  <p key={index}>{item?.name}</p>
                ))}
              </div>
            </div>
            <p className="tagline">{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
