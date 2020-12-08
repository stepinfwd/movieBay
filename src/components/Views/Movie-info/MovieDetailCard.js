import React from "react";
import "./MovieDetailCard.css";
import Loader from "../../common/Loader/Loader";

function MovieDetailCard({ movieitem }) {
  const fall_src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60;"

  return (
    <>
      <div className="movie_card" id="bright">
        {movieitem ? (
          <>
            <div className="info_section">
              <div className="movie_header">
              {movieitem.image && 
                <div
                  className="movie_header_image"
                  style={{ backgroundImage: `url(${movieitem.image.original ||fall_src}) `, }}
                  alt=""
                />}
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
            {movieitem.image && 
            <div
              className="blur_back bright_back"
              style={{ backgroundImage: `url(${movieitem.image.original ||fall_src}) `, }}
            ></div>}
          </>
        ) : (
            <Loader />
          )}

      </div>
    </>
  );
}

export default MovieDetailCard;
