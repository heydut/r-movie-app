import "./Library.css";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=7d2e5ef7";

const Library = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`);
    const res = await req.json();

    setMovies(res.Search);
    console.log(res.Search);
  };

  useEffect(() => {
    // searchMovies("Batman");
  }, []);

  return (
    <>
      <div className="header-bg">
        <header className="header container">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              placeholder="search for a film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? searchMovies(search) : "")}
            ></input>
            <button onClick={() => searchMovies(search)}>Search</button>
          </div>
        </header>
      </div>
      <section className="container">
        {movies.length > 0 ? (
          <div className="movies-results">
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </div>
        ) : (
          <div className="no-movies">
            <h2>No movies found</h2>
          </div>
        )}
      </section>
    </>
  );
};

export default Library;
