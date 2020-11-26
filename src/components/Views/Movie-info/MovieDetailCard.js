import React from "react";
import "./MovieDetailCard.css";

function MovieDetailCard({ movieitem }) {
  return (
    <>
      <div className="movie_card" id="bright">
        {movieitem ? (
          <>
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                style={{ backgroundImage: `url(${movieitem.image.medium})` }}
              />
              <h1>{movieitem.name}</h1>
              <h4>{movieitem.premiered}</h4>
              <span className="minutes">{movieitem.runtime} min</span>
              <p className="type">
                {movieitem.genres[0]}, {movieitem.genres[1]},{" "}
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
          "null"
        )}
      
      </div>
    </>
  );
}

export default MovieDetailCard;
{
  /* <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div> */
}
