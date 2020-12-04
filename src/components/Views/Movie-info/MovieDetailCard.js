import React from "react";
import "./MovieDetailCard.css";
import Loader from "../../common/Loader/Loader";

function MovieDetailCard({ movieitem }) {
  return (
    <>
      <div className="movie_card" id="bright">
        {movieitem ? (
          <>
            <div className="info_section">
              <div className="movie_header">
                <img
                  className="movie_header_image"
                  style={{ backgroundImage: `url(${movieitem.image.medium})` }}
                  alt=""
                />
                <h1>{movieitem.name}</h1>
                <span className="minutes">{movieitem.runtime} min</span>
                <p className="type">
                  {movieitem.genres[0]}, {movieitem.genres[1]},
                {movieitem.genres[2]}
                </p>
              </div>
              <div className="movie_desc">
                <p className="text">{movieitem.summary}</p>
              </div>
            </div>
            <div
              className="blur_back bright_back"
              style={{ backgroundImage: `url(${movieitem.image.original})` }}
            ></div>
          </>
        ) : (
            <Loader />
          )}

      </div>
    </>
  );
}

export default MovieDetailCard;
