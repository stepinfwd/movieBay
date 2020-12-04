import React from "react";
import "./Episode.css";
import Loader from "../common/Loader/Loader";

function Episode({ episode }) {
  return (
    <div className="episode-global-container">
      <p className="castInfo_global_header">
        Episode<span className="castInfo_global_header_span">Info</span>
      </p>
      <div className="episode_table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Time</th>
              <th>Date</th>
              {/* <th id="table_top_right">Rating</th> */}
            </tr>
          </thead>

          <tbody>
            {episode
              ? episode.map((episode) => (
                <>
                  {/* <h3 className="movie_table_name">{episode.name}</h3> */}
                  <tr key={episode.id}>
                    <td>{episode.name}</td>
                    <td>{episode.season}</td>
                    <td>{episode.runtime}</td>
                    <td>{episode.airdate}</td>
                    {/* <td>love</td> */}
                  </tr>
                </>
              ))
              : <Loader />}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Episode;
