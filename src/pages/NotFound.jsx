import logo from "../assets/pop.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="container">
        <img src={logo} alt="image" />
        <h1>404 | Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
