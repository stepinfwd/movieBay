import React from "react";
import "./Episode.css";
import Loader from "../common/Loader/Loader";

function Episode({ episode }) {
  return (
    <div className="episode-global-container">
      <p className="castInfo-global-header">
        Episode<span className="castInfo-global-header-span">Info</span>
      </p>
      <div className="episode-table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {episode ? (
              episode.map((episode) => (
                <>
                  <tr key={episode.id}>
                    <td>{episode.name}</td>
                    <td>{episode.season}</td>
                    <td>{episode.runtime}</td>
                    <td>{episode.airdate}</td>
                  </tr>
                </>
              ))
            ) : (
              <Loader />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Episode;
