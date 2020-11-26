import React from "react";
import "./MovieDetailCard.css"

function MovieDetailCard({data}) {
  return (
    <>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            <h1>{data.name}</h1>
            <h4>2017, David Ayer</h4>
            <span class="minutes">117 min</span>
            <p class="type">Action, Crime, Fantasy</p>
          </div>
          <div class="movie_desc">
            <p class="text">
             {data.summary}
            </p>
          </div>
          {/* <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">share</i>
              </li>
              <li>
                <i class="material-icons"></i>
              </li>
              <li>
                <i class="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div> */}
        </div>
        <div class="blur_back bright_back"></div>
      </div>
    </>
  );
}

export default MovieDetailCard;
