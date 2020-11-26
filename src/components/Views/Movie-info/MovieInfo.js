import React from "react";
import "./MovieInfo.css";
import MovieDetailCard from "./MovieDetailCard";
function MovieInfo({ data }) {
  return (
    <div className="movie_info_global">
      <h3>SHOW INFO</h3>
      <MovieDetailCard data={data} />
      {data
        ? data.map((movie) => (
            <div className="movie_info_sidenote">
              <p>
                <span>LANGUAGE:</span>
                {movie.language}
              </p>
              <p>
                <span>TYPE:</span>
                {movie.type}
              </p>
              <p>
                <span>STATUS:</span>
                {movie.status}
              </p>
              <p>
                <span>WEBSITE:</span>
                {movie.officialSite}
              </p>
              <p>
                <span>PREMIERED:</span>
                {movie.premiered}
              </p>
              {/* <p>{movie.network}</p> */}
            </div>
          ))
        : "loda"}
      s
    </div>
  );
}
export default MovieInfo;
