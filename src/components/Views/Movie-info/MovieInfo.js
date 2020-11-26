import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import MovieDetailCard from "./MovieDetailCard";
import axios from "axios";
import { useParams } from "react-router-dom";


function MovieInfo({ data }) {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}`;
console.log("ID Is,",id)
  const [movieitem, setMovieitem] = useState();
  useEffect(() => {
    console.log("entey done");
    axios.get(url).then((res) => {
      setMovieitem(res.data);
      console.log("calling");
    });
  }, [url]);
  return (
    <div className="movie_info_global">
      <h3 className="movie_info_main_header">SHOW <span className="movie_info_main_header_span">INFO</span></h3>
      <MovieDetailCard movieitem={movieitem} />
      {movieitem ? (
        <div className="movie_info_sidenote">
          <p>
            <span>LANGUAGE:</span>
            {movieitem.language}
          </p>
          <p>
            <span>TYPE:</span>
            {movieitem.type}
          </p>
          <p>
            <span>STATUS:</span>
            {movieitem.status}
          </p>
          <p>
            <span>WEBSITE:</span>
            {movieitem.officialSite}
          </p>
          <p>
            <span>PREMIERED:</span>
            {movieitem.premiered}
          </p>
          {/* <p>{movie.network}</p> */}
        </div>
      ) : (
        "LOADING"
      )}
    </div>
  );
}
export default MovieInfo;
