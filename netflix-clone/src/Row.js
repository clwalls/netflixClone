import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runes based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      // must be async as TMDB request takes .2-1s
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div classname="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          // ES6 string interpol must use backqoutes
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_URL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
