import "./Home.css";
import movieimg from "../imgs/movie.png";
import { useNavigate } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

const Home = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/acess");
  };

  return (
    <div id="home">
      <div className="container">
        <section id="movie-night">
          <div className="movie-text">
            {" "}
            <h2>iMovie</h2>
            <p>
              Millions of movies, TV shows and series to discover.<br></br>{" "}
              <WavyLink direction="up" to="/acess" color="#ff6600">
                <span>Explore now.</span>
              </WavyLink>
            </p>
          </div>
          <img className="movie-img" src={movieimg} alt="movieimg" />
        </section>
      </div>
    </div>
  );
};

export default Home;
