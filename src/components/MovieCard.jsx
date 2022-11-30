import "./MovieCard.css";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie-card" key={imdbID}>
      <div data-aos="fade-up">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        ></img>
        <div className="info">
          <h3>{Title}</h3>
          <div className="tags">
            <p>{Year}</p>
            <p>{Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
